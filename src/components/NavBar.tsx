import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <h2>Project Manager</h2>

      <div className='links'>
        <Link to={'/'}>Home</Link>
      </div>
    </nav>
  )
}

export default NavBar