import { PropsWithChildren, createContext, useEffect } from 'react'
import { UserType, UserContextType } from '../types/user'
import { CheckSession } from '../services/auth'
import { DeleteProject, GetUser, PostProject, PostTodo } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'
import useUserProjects from '../hooks/useUserProjects'
import { ProjectPayloadType, ProjectType } from '../types/project'
import { TodoPayloadType } from '../types/todo'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser, resetUser] = useUser()
  const [projects, setProjects] = useUserProjects()
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
      setProjects([...userRes.projects])
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

    projects.forEach(project => {
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

      const updatedProjects = [...projects]
      updatedProjects.push(newProject)
      setProjects([...updatedProjects])
    }
  }

  const deleteProject = async (project: ProjectType) => {
    await DeleteProject(project.id)

    const updatedProjects = [...projects]
    updatedProjects.forEach((p, i) => {
      if (p.id === project.id) {
        updatedProjects.splice(i, 1);
      }
    })
    setProjects([...updatedProjects])
  }

  const postTodo = async (payload: TodoPayloadType, project: ProjectType) => {
    const todo = await PostTodo(payload)

    const newTodos = [...project.todos]
    newTodos.push(todo)

    const updatedProjects = [...projects]
    updatedProjects.forEach((p, i) => {
      if (p.id === project.id) {
        updatedProjects[i] = {...p, todos: newTodos}
      }
    })
    setProjects([...updatedProjects])
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
        projects,
        setProjects,
        findProject,
        postProject,
        deleteProject,
        postTodo,
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
