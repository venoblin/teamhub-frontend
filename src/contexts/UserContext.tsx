import { PropsWithChildren, createContext, useEffect } from 'react'
import { UserType, UserContextType } from '../types/user'
import { CheckSession } from '../services/auth'
import { DeleteProject, GetUser, PostBug, PostProject, PostTodo } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'
import useUserProjects from '../hooks/useUserProjects'
import { ProjectPayloadType, ProjectType } from '../types/project'
import { TodoPayloadType } from '../types/todo'
import { BugPayloadType } from '../types/bug'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser, resetUser] = useUser()
  const [userProjects, setUserProjects] = useUserProjects()
  const [authenticated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    resetUser()
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const getAndSetUser = async (id: number) => {
    if (typeof id === 'number') {
      const userRes = await GetUser(id)

      setUser({
        id: userRes.id,
        username: userRes.username,
        name: userRes.name,
        email: userRes.email
      })
      setUserProjects([...userRes.projects])
      toggleAuthenticated(true)
    }
  }

  const checkToken = async () => {
    const userPayload: UserType = await CheckSession()
    
    if (userPayload.id) await getAndSetUser(userPayload.id)
  }

  const updateUser = async () => {
    if (typeof user.id === 'number') {
      const userRes = await GetUser(user.id)
      setUser({...userRes})
    }
  }

  const findProject = (name: string) => {
    let foundProject = null

    userProjects.forEach(project => {
      if (project.name === name) foundProject = project
    })

    return foundProject
  }

  const postProject = async (payload: ProjectPayloadType) => {
    if (user.id) {
      const newProject = await PostProject({
        name: payload.name,
        git_url: payload.git_url,
        owner_id: user.id
      })

      const updatedProjects = [...userProjects]
      updatedProjects.push(newProject)
      setUserProjects(updatedProjects)
    }
  }

  const deleteProject = async (project: ProjectType) => {
    await DeleteProject(project.id)

    const updatedProjects = [...userProjects]
    updatedProjects.forEach((p, i) => {
      if (p.id === project.id) {
        updatedProjects.splice(i, 1);
      }
    })
    setUserProjects(updatedProjects)
  }

  const postTodo = async (payload: TodoPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => {
    const todo = await PostTodo(payload)

    const newProject = {...project, todos: [...project.todos, todo]}

    const updatedProjects = [...userProjects]
    updatedProjects.forEach((p, i) => {
      if (p.id === project.id) {
        updatedProjects[i] = newProject
      }
    })
    setProject(newProject)
    setUserProjects(updatedProjects)
  }

  const postBug = async (payload: BugPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>> ) => {
    const bug = await PostBug(payload)

    const newProject = {...project, bugs: [...project.bugs, bug]}

    const updatedProjects = [...userProjects]
    updatedProjects.forEach((p, i) => {
      if (p.id === project.id) {
        updatedProjects[i] = newProject
      }
    })
    setProject(newProject)
    setUserProjects(updatedProjects)
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
        getAndSetUser,
        updateUser,
        userProjects,
        setUserProjects,
        findProject,
        postProject,
        deleteProject,
        postTodo,
        postBug,
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
