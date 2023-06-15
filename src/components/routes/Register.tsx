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

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' id='confirmPassword' name='confirmPassword' required />
        
        <label htmlFor="name">Name</label>
        <input type='text' id='name' name='name' required />

        <input type='text' />

      </form>
    </div>
  )
}

export default Register