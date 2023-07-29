import { useState } from 'react'
import { UserPayload } from '../types/user'

const useUser = (initialUser?: UserPayload): any[] => {
  const nullUser = {
    id: null,
    name: null,
    username: null,
    email: null
  }
  
  const [user, setUser] = useState<UserPayload>(nullUser)

  const resetUser = () => {
    setUser(nullUser)
  }

  return [user, setUser, resetUser]
}

export default useUser