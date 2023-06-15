import '../../styles/Register.css'

const Register = () => {
  return (
    <div className='Register'>
      <h1>Register</h1>

      <form>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' required />
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </form>
    </div>
  )
}

export default Register