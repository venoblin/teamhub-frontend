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
    <nav className='main-nav'>
      <Link to='/'>Project Manager</Link>

      <div className='links'>
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