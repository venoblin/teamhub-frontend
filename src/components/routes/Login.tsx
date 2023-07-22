import '../../styles/Login.css'
import InputHandler from '../../classes/InputHandler'
import useFormState from '../../hooks/useFormState'

const Login = () => {
  const [formState, setFormState] = useFormState('email', 'password')
  
  return (
    <div className='login'>
      <h1>Login</h1>

      <form>
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
      </form>
    </div>
  )
}

export default Login