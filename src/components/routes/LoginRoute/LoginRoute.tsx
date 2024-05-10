import './LoginRoute.css'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { PopUpContext } from '../../../contexts/PopUpContext'
import { LoaderContext } from '../../../contexts/LoaderContext'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import useFormState from '../../../hooks/useFormState'

const Login = () => {
  const userContext = useContext(UserContext)
  const popUpContext = useContext(PopUpContext)
  const loaderContext = useContext(LoaderContext)
  const [formState, setFormState, resetFormState] = useFormState(['email', 'password'])
  const navigate = useNavigate()

  const loginUser = async () => {
    try {
      await loaderContext?.load(userContext?.loginUser(formState))
      navigate('/')
    } catch (err) {
      popUpContext?.showPopUp('Invalid email or password!')
    }
    resetFormState()
  }

  return (
    <div className='login route'>
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