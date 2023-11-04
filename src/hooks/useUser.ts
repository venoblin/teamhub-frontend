import { useState } from 'react'
import { UserType } from '../types/user'

const useUser = (initialUser?: UserType): any[] => {
  const nullUser = {
    id: null,
    name: null,
    username: null,
    email: null,
    projects: null
  }
  
  const [user, setUser] = useState<UserType>(nullUser)

  const resetUser = () => {
    setUser(nullUser)
  }

  return [user, setUser, resetUser]
}

export default useUser