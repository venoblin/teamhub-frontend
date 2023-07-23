import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { UserContextType } from '../@types/user'
import { CheckSession } from '../services/auth'
import useToggle from '../hooks/useToggle'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState({name: ''})
  const [authenitcated, toggleAuthenticated] = useToggle(false)

  const handleLogout = () => {
    setUser({name: ''})
    toggleAuthenticated()
  }

  const checkToken = async () => {
    const userRes = await CheckSession()
    setUser(userRes)
    toggleAuthenticated()
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}
