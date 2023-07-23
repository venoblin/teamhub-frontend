import '../../styles/Login.css'
import { Link } from 'react-router-dom'
import { LoginUser } from '../../services/auth'
import FormHandler from '../../classes/FormHandler'
import InputHandler from '../../classes/InputHandler'
import useFormState from '../../hooks/useFormState'

const Login = () => {
  const [formState, setFormState, resetFormState] = useFormState('email', 'password')

  const loginUser = async () => {
    console.log('hi')
    resetFormState()
  }

  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={(evt) => FormHandler.submit(evt, loginUser)}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          id='email' 
          name='email' 
          required
          value={formState.email}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          required
          value={formState.password}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <button>Login</button>
      </form>

      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login