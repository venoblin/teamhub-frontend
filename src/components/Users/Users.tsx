import './Users.css'
import useFormState from '../../hooks/useFormState'
import { changeListen } from '../../utils/inputHandler'
import { submit } from '../../utils/formHandler'
import { GetUserByIdentifier } from '../../services'
import useUser from '../../hooks/useUser'
import UserCard from '../UserCard/UserCard'

const Users = (props: {isAddMode?: boolean}) => {
  const [formState, setFormState, resetFormState] = useFormState(['identifier'])
  const [user, setUser] = useUser()

  const submitHandler = async () => {
    try {
      const user = await GetUserByIdentifier(formState.identifier)
      setUser({...user})
    } catch (err: any) {
      console.log(err)
    }

    resetFormState()
  }

  return (
    <div className='users'>
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

      {user.id && (
        <UserCard user={user} isAddMode={props.isAddMode} />
      )}
    </div>
  )
}

export default Users