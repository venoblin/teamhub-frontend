import { useEffect, useState } from 'react'
import '../styles/Users.css'
import Panel from './ui/Panel'
import useFormState from '../hooks/useFormState'
import { changeListen } from '../utils/inputHandler'
import { submit } from '../utils/formHandler'
import { GetUserByIdentifier } from '../services'
import { UserType } from '../types/user'
import useUser from '../hooks/useUser'

const Users = () => {
  const [formState, setFormState, resetFormState] = useFormState(['identifier'])
  const [user, setUser] = useUser()

  const submitHandler = async () => {
    const user = await GetUserByIdentifier(formState.identifier)
    setUser({...user})
    resetFormState()
  }

  return (
    <Panel>
      <h2>Users</h2>

      <form onSubmit={(evt) => submit(evt, submitHandler)}>
        <label htmlFor='identifier'>Search User</label>
        <input 
          type='text'
          id='identifier'
          name='identifier'
          placeholder='Email or Username'
          required
          value={formState.identifier}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <button>Search</button>
      </form>


    </Panel>
  )
}

export default Users