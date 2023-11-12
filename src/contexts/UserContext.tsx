import { PropsWithChildren, createContext, useEffect } from 'react'
import { UserPayloadType, UserContextType } from '../types/user'
import { CheckSession } from '../services/auth'
import { GetUser } from '../services'
import useToggle from '../hooks/useToggle'
import useUser from '../hooks/useUser'

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
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
