import { useState } from 'react'
import { UserType } from '../types/user'

const useUser = (): [UserType, React.Dispatch<React.SetStateAction<UserType>>, () => void] => {
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