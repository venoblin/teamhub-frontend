import { useEffect, useState } from 'react'
import '../styles/Users.css'
import Panel from './ui/Panel'
import { GetAllUsers } from '../services'
import useFormState from '../hooks/useFormState'
import { changeListen } from '../utils/inputHandler'

const Users = () => {
  const [formState, setFormState, resetFormState] = useFormState(['identifier'])

  const submitHandler = async () => {
    console.log(formState)
  }

  return (
    <Panel>
      <h2>Users</h2>

      <form onSubmit={submitHandler}>
        <label htmlFor='ident'>Search User</label>
        <input 
          type='text'
          id='ident'
          name='ident'
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