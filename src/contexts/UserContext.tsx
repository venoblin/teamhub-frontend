import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { UserContextType } from '../@types/user'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState({name: ''})

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}
