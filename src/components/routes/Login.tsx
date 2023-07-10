import '../../styles/Login.css'

const Login = () => {
  
  return (
    <div className='Login'>
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