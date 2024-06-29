import { PropsWithChildren, createContext, useEffect, useContext } from 'react'
import { UtilitiesContext } from './UtilitiesContext'
import PopUpMessage from '../components/PopUpMessage/PopUpMessage'
import { UserType, UserContextType } from '../types/user'
import { CheckSession, LoginUser, RegisterUser } from '../services/auth'
import { DeleteBug, DeleteNotification, DeleteProject, DeleteTodo, GetUser, PatchBug, PatchNotification, PatchProject, PatchTodo, PostBug, PostContributor, PostEvent, PostNotification, PostProject, PostTodo } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'
import useUserProjects from '../hooks/useUserProjects'
import { ProjectPatchType, ProjectPayloadType, ProjectType } from '../types/project'
import { TodoPatchType, TodoPayloadType, TodoType } from '../types/todo'
import { BugPatchType, BugPayloadType, BugType } from '../types/bug'
import { updateObjInArr } from '../utils'
import useUserNotification from '../hooks/useUserNotifications'
import { LoginType, RegisterType } from "../types/auth"
import { NotificationPatchType, NotificationPayloadType, NotificationType } from '../types/notification'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const utilitiesContext = useContext(UtilitiesContext)
  const [user, setUser, resetUser] = useUser()
  const [userProjects, setUserProjects] = useUserProjects()
  const [userContributions, setUserContributions] = useUserProjects()
  const [userNotifications, setUserNotifications] = useUserNotification()
  const [authenticated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    resetUser()
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const getAndSetUser = async (id: number) => {
    try {
      const userRes = await GetUser(id)
      setUser({
        id: userRes.id,
        username: userRes.username,
        name: userRes.name,
        email: userRes.email
      })
      setUserProjects([...userRes.projects])
      setUserContributions([...userRes.contributions])
      setUserNotifications([...userRes.notifications])
      toggleAuthenticated(true)
    } catch {
      throw new Error('Error getting user information!')
    }
  }

  const loginUser = async (payload: LoginType) => {
    try {
      const res = await LoginUser(payload)
      getAndSetUser(res.id)
    } catch {
      throw new Error('Error login in user!')
    }
  }

  const registerUser = async (payload: RegisterType) => {
    try {
      await RegisterUser(payload)
      await loginUser({email: payload.email, password: payload.password})
    } catch {
      throw new Error('Error registering user!')
    }
  }

  const findProject = (ownerUsername: string, projectName: string) => {
    const allProjects = [...userProjects, ...userContributions]
    let foundProject = null

    allProjects.forEach(project => {
      if (project.owner.username === ownerUsername && project.name === projectName) {
        foundProject = project
      }
    })
    return foundProject
  }

  const postProject = async (payload: ProjectPayloadType) => {
    try {
      const newProject = await PostProject({
        name: payload.name,
        git_url: payload.git_url,
        owner_id: user.id
      })
      const updatedProjects = [...userProjects]
      updatedProjects.push(newProject)
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error posting project!')
    }
  }

  const deleteProject = async (project: ProjectType) => {
    try {
      await DeleteProject(project.id)
      const updatedProjects = [...userProjects]
      updatedProjects.forEach((p, i) => {
        if (p.id === project.id) {
          updatedProjects.splice(i, 1)
        }
      })
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error in deleting project!')
    }    
  }

  const patchProject = async (project: ProjectType, update: ProjectPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      await PatchProject(project.id, update)
      const newProject = {...project, ...update}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)  
      setProject(newProject)
      setUserProjects(updatedProjects)  
    } catch {
      throw new Error('Error in patching project!')
    }
  }

  const postTodo = async (payload: TodoPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      const todo = await PostTodo(payload)
      const newProject = {...project, todos: [...project.todos, todo]}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error in posting todo!')
    }
  }

  const deleteTodo = async (project: ProjectType, todoId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      await DeleteTodo(todoId)
      const newTodos = project.todos.filter(t => t.id !== todoId)
      const newProject = {...project, todos: newTodos}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)  
    } catch {
      throw new Error('Error in deleting todo!')
    }
  }

  const postBug = async (payload: BugPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      const bug = await PostBug(payload)
      const newProject = {...project, bugs: [...project.bugs, bug]}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error in posting bug')
    }
  }

  const deleteBug = async (project: ProjectType, bugId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      await DeleteBug(bugId)
      const newBugs = project.bugs.filter(b => b.id !== bugId)
      const newProject = {...project, bugs: newBugs}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)  
    } catch {
      throw new Error('Error in deleting bug!')
    }
  }

  const patchBug = async (project: ProjectType, bug: BugType, update: BugPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      await PatchBug(bug.id, update)
      let newEvent = null
      if (update.completed) {
        newEvent = await PostEvent({
          event: `Completed "${bug.bug}" bug`,
          project_id: project.id
        })
      }
      const newEvents = newEvent !== null ? [...project.events, newEvent] : [...project.events]
      const newBugs = project.bugs.map(b => b.id === bug.id ? {...b, ...update} : b)
      const newProject = {...project, bugs: newBugs, events: newEvents}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error in patching bug!')
    }
  }

  const patchTodo = async (project: ProjectType, todo: TodoType, update: TodoPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    try {
      await PatchTodo(todo.id, update)

      let newEvent = null
      if (update.completed) {
        newEvent = await PostEvent({
          event: `Completed "${todo.todo}" todo`,
          project_id: project.id
        })
      }
      
      const newEvents = newEvent !== null ? [...project.events, newEvent] : [...project.events]
      const newTodos = project.todos.map(t => t.id === todo.id ? {...t, ...update} : t)
      const newProject = {...project, todos: newTodos, events: newEvents}
      const updatedProjects = updateObjInArr(userProjects, project, newProject)
      setProject(newProject)
      setUserProjects(updatedProjects)
    } catch {
      throw new Error('Error in patching todo!')
    }
  }

  const postNotification = async (payload: NotificationPayloadType) => {
    try {
      const newNotification = await PostNotification(payload)
      setUserNotifications([...userNotifications, newNotification])
    } catch {
      throw new Error('Error in posting notification!')
    }
  }

  const patchNotification = async (notification: NotificationType, payload: NotificationPatchType) => {
    try {
      const update = await PatchNotification(notification.id, payload)
      const updatedNotifications = updateObjInArr(userNotifications, notification, update)
      setUserNotifications([...updatedNotifications])
    } catch {
      throw new Error('Error in patching notification!')
    }
  }

  const deleteNotification = async (notification: NotificationType) => {
    try {
      await DeleteNotification(notification.id)
      const updatedNotifications = [...userNotifications]
      updatedNotifications.forEach((n, i) => {
        if (n.id === notification.id) {
          updatedNotifications.splice(i, 1);
        }
      })
      setUserNotifications(updatedNotifications)
    } catch {
      throw new Error('Error in deleting notification!')
    }
  }

  const acceptProjectInvite = async (notification: NotificationType) => {
    try {
      const data = await PostContributor(notification.user_id!, notification.project_id!)
      const updatedContributions = [...userContributions]
      updatedContributions.push(data.project)
      setUserContributions(updatedContributions)
    } catch {
      throw new Error('Error in posting contributor!')
    }
  }

  const leaveProject = async (project: ProjectType) => {
    try {
      
    } catch {
      throw new Error('Error leaving project!')
    }
  }

  const checkAndGet = async () => {
    try {
      const userPayload: UserType = await CheckSession()
      if (userPayload.id) await getAndSetUser(userPayload.id)
    } catch {
      throw new Error('Error checking session!')
    }
  }

  const checkToken = async () => {
    try {
      await utilitiesContext?.load(checkAndGet())
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error verifying authentication!' />)
    }  
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <UserContext.Provider value={{
        user, 
        setUser,
        loginUser,
        registerUser,
        getAndSetUser,
        userProjects,
        setUserProjects,
        findProject,
        postProject,
        deleteProject,
        patchProject,
        postTodo,
        deleteTodo,
        patchTodo,
        postBug,
        deleteBug,
        patchBug,
        userContributions,
        setUserContributions,
        userNotifications,
        setUserNotifications,
        postNotification,
        patchNotification,
        deleteNotification,
        acceptProjectInvite,
        leaveProject,
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
