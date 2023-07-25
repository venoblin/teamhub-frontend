import '../../styles/Register.css'
import { Link } from 'react-router-dom'
import InputHandler from '../../classes/InputHandler'
import useFormState from '../../hooks/useFormState'

const Register = () => {
  const [formState, setFormState] = useFormState([
    'email', 
    'password', 
    'confirmPassword', 
    'name', 
    'username'
  ])

  return (
    <div className='register'>
      <h1>Register</h1>

      <form>
        <label htmlFor='email'>Email</label>
        <input type='email'
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

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input 
          type='password' 
          id='confirmPassword' 
          name='confirmPassword' 
          required
          value={formState.confirmPassword}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)} 
        />
        
        <label htmlFor="name">Name</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          required
          value={formState.name}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)} 
        />
        
        <label htmlFor='username'>Username</label>
        <input 
          type='text' 
          id='username' 
          name='username' 
          required
          value={formState.username}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <button>Register</button>
      </form>

      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Register