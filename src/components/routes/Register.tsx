import '../../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../services/auth'
import { changeListen } from '../../utils/inputHandler'
import { submit } from '../../utils/formHandler'
import useFormState from '../../hooks/useFormState'

const Register = () => {
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
      await RegisterUser(formState)
      navigate('/login')
    } catch (err) {
      console.error('There was an error!')
    }
    resetFormState()
  }

  return (
    <div className='register'>
      <h1>Register</h1>

      <form onSubmit={(evt) => submit(evt, registerUser)}>
        <label htmlFor='email'>Email</label>
        <input type='email'
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

      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Register