import '../../styles/Login.css'
import useFormState from '../../hooks/useFormState'

const Login = () => {
  const [formState, setFormState] = useFormState('email', 'password')
  
  return (
    <div className='login'>
      <h1>Login</h1>

      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' required />
      </form>
    </div>
  )
}

export default Login