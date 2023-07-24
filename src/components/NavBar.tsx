import '../styles/NavBar.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const NavBar = () => {
  const userContext = useContext(UserContext)

  const logoutHandler = () => {
    userContext?.handleLogout()
  }
  
  return (
    <nav className='navbar'>
      <h2>Project Manager</h2>

      <div className='links'>
        <Link to='/'>Home</Link>

        {userContext?.authenticated ? (
          <Link to='/' onClick={logoutHandler}>Log Out</Link>
        ) : (
          <Link to='/login'>Log In</Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar