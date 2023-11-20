import { PropsWithChildren, createContext, useEffect } from 'react'
import { UserPayloadType, UserContextType } from '../types/user'
import { CheckSession } from '../services/auth'
import { DeleteProject, GetUser, PostProject, PostTodo } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'
import { ProjectPayloadType, ProjectType } from '../types/project'
import { TodoPayloadType } from '../types/todo'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser, resetUser] = useUser()
  const [authenticated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    resetUser()
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const getAndSetUser = async (id: number) => {
    if (typeof id === 'number') {
      const userRes = await GetUser(id)

      setUser({...userRes})
      toggleAuthenticated(true)
    }
  }

  const checkToken = async () => {
    const userPayload: UserPayloadType = await CheckSession()
    
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

    user.projects?.forEach(project => {
      if (project.name === name) foundProject = project
    })

    return foundProject
  }

  const postProject = async (payload: ProjectPayloadType) => {
    if (user.id) {
      const project = await PostProject({
        name: payload.name,
        git_url: payload.git_url,
        owner_id: user.id
      })

      const newProjects = [...user.projects]
      newProjects.push(project)
      setUser({...user, projects: newProjects})
    }
  }

  const deleteProject = async (project: ProjectType) => {
    await DeleteProject(project.id)

    const newProjects = [...user.projects]
    user.projects.forEach((p, i) => {
      if (p.id === project.id) {
        newProjects.splice(i, 1);
      }
    })
    setUser({...user, projects: newProjects})
  }

  const postTodo = async (payload: TodoPayloadType, project: ProjectType) => {
    const todo = await PostTodo(payload)

    const newTodos = [...project.todos]
    newTodos.push(todo)

    const newProjects = [...user.projects]
    newProjects.forEach((p, i) => {
      if (p.id === project.id) {
        newProjects[i] = {...p, todos: newTodos}
      }
    })
    setUser({...user, projects: newProjects})
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
