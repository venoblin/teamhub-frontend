import { useState } from 'react'
import { User } from '../types/user'

const useUser = (initialUser?: User): any[] => {
  const nullUser = {
    id: null,
    name: null,
    username: null,
    email: null
  }
  
  const [user, setUser] = useState<User>(nullUser)

  const resetUser = () => {
    setUser(nullUser)
  }

  return [user, setUser, resetUser]
}

export default useUser