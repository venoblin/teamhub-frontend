import { PropsWithChildren, createContext, useEffect } from 'react'
import { UserPayloadType, UserContextType } from '../types/user'
import { CheckSession } from '../services/auth'
import { DeleteProject, GetUser, PostProject } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'
import { ProjectPayloadType, ProjectType } from '../types/project'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser, resetUser] = useUser()
  const [authenticated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    resetUser()
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const userPayload: UserPayloadType = await CheckSession()
    
    if (typeof userPayload.id === 'number') {
      const userRes = await GetUser(userPayload.id)
      setUser({...userRes})
      toggleAuthenticated(true)
    }
  }

  const updateUser = async () => {
    if (typeof user.id === 'number') {
      const userRes = await GetUser(user.id)
      setUser({...userRes})
    }
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

  const findProject = (name: string) => {
    let foundProject = null

    user.projects?.forEach(project => {
      if (project.name === name) foundProject = project
    })

    return foundProject
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
        updateUser,
        findProject,
        postProject,
        deleteProject,
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
