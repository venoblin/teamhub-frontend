import '../../styles/Register.css'

const Register = () => {
  return (
    <div className='Register'>
      <h1>Register</h1>

      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' required />

        <input type='text' />

        <input type='text' />

      </form>
    </div>
  )
}

export default Register