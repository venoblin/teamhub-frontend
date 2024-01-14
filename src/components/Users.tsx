import { useEffect, useState } from 'react'
import '../styles/Users.css'
import Panel from './ui/Panel'
import { GetAllUsers } from '../services'

const Users = () => {
  const [users, setUsers] = useState<any[]>([])

  const getAllUsers = async () => {
    const users = await GetAllUsers
    // setUsers(users)
  }

  useEffect(() => {
    getAllUsers()
  }) 

  return (
    <Panel>
      <h2>Users</h2>
    </Panel>
  )
}

export default Users