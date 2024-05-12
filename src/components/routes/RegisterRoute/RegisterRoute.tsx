import './RegisterRoute.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import { UserContext } from '../../../contexts/UserContext'
import useFormState from '../../../hooks/useFormState'
import PopUpMessage from '../../PopUpMessage/PopUpMessage'
import { UtilitiesContext } from '../../../contexts/UtilitiesContext'

const Register = () => {
  const utilitiesContext = useContext(UtilitiesContext)  
  const userContext = useContext(UserContext)
  const [formState, setFormState, resetFormState] = useFormState([
    'email', 
    'password', 
    'confirmPassword', 
    'name', 
    'username'
  ])
  const navigate = useNavigate()

  const registerUser = async () => {
    try {
      await utilitiesContext?.load(userContext?.registerUser(formState))
      navigate('/')
    } catch (err) {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Email or username already in use!' />)
    }
    resetFormState()
  }

  return (
    <div className='register route'>
      <h1>Register</h1>

      <form onSubmit={(evt) => submit(evt, registerUser)}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email'
          id='email'
          name='email'
          required
          value={formState.email}
          onChange={(evt) => changeListen(evt, formState, setFormState)} 
        />

        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          required
          value={formState.password}
          onChange={(evt) => changeListen(evt, formState, setFormState)} 
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input 
          type='password' 
          id='confirmPassword' 
          name='confirmPassword' 
          required
          value={formState.confirmPassword}
          onChange={(evt) => changeListen(evt, formState, setFormState)} 
        />
        
        <label htmlFor="name">Name</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          required
          value={formState.name}
          onChange={(evt) => changeListen(evt, formState, setFormState)} 
        />
        
        <label htmlFor='username'>Username</label>
        <input 
          type='text' 
          id='username' 
          name='username' 
          required
          value={formState.username}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <button>Register</button>
      </form>
    </div>
  )
}

export default Register