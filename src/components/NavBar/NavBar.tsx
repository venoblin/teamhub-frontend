import './NavBar.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const NavBar = () => {
  const userContext = useContext(UserContext)

  const logoutHandler = () => {
    userContext?.handleLogout()
  }
  
  return (
    <nav className='main-nav'>
      <Link className='logo' to='/'>TeamHub</Link>

      <div className='links'>
        {userContext?.authenticated ? (
          <div>
            <Link to='/notifications'>Notifications</Link>
            <Link to='/' onClick={logoutHandler}>Log Out</Link>
          </div>
        ) : (
          <Link to='/login'>Log In</Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar