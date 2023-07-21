import '../../styles/Register.css'
import InputHandler from '../../classes/InputHandler'
import useFormState from '../../hooks/useFormState'

const Register = () => {
  const [formState, setFormState] = useFormState(
    'email', 
    'password', 
    'confirmPassword', 
    'name', 
    'username')

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
        />

        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          required
          value={formState.password} 
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input 
          type='password' 
          id='confirmPassword' 
          name='confirmPassword' 
          required
          value={formState.confirmPassword} 
        />
        
        <label htmlFor="name">Name</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          required
          value={formState.name} 
        />
        
        <label htmlFor='username'>Username</label>
        <input 
          type='text' 
          id='username' 
          name='username' 
          required
          value={formState.username}
        />
      </form>
    </div>
  )
}

export default Register