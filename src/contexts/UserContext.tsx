import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { UserContextType } from '../@types/user'
import { CheckSession } from '../services/auth'
import useToggle from '../hooks/useToggle'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState({name: ''})
  const [authenticated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    setUser({name: ''})
    toggleAuthenticated(false)
  }

  const checkToken = async () => {
    const userRes = await CheckSession()
    setUser(userRes)
    toggleAuthenticated(true)
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
        authenticated, 
        toggleAuthenticated,
        handleLogout
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
