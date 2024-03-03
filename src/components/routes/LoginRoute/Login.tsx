import './Login.css'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../../services/auth'
import { UserContext } from '../../../contexts/UserContext'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import useFormState from '../../../hooks/useFormState'

const Login = () => {
  const userContext = useContext(UserContext)
  const [formState, setFormState, resetFormState] = useFormState(['email', 'password'])
  const navigate = useNavigate()

  const loginUser = async () => {
    try {
      const payload = await LoginUser(formState)
      
      userContext?.getAndSetUser(payload.id)
      navigate('/')
    } catch (err) {
      console.error('There was an error!')
    }
    resetFormState()
  }

  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={(evt) => submit(evt, loginUser)}>
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

        <button>Login</button>
      </form>

      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login