import './HomeRoute.css'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import RecentProjects from '../../RecentProjects/RecentProjects'
import { Link } from 'react-router-dom'

const HomeRoute = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="home route">
      {userContext?.authenticated ? (
        <div>
          <h1>Hello, {userContext.user.name}!</h1>
          <RecentProjects />
        </div>
      ) : (
        <div>
          <h1>Project Manager</h1>
          <p>Take your project to the next level!</p>
          <Link to='/register'>Register</Link>
        </div>
      )}
      
    </div>
  )
}

export default HomeRoute