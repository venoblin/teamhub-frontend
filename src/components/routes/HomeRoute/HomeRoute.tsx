import './HomeRoute.css'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import RecentProjects from '../../RecentProjects/RecentProjects'
import { Link } from 'react-router-dom'

const Home = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="home route">
      {userContext?.authenticated ? (
        <div>
          <RecentProjects />
        </div>
      ) : (
        <div>
          <h1>Organize your project</h1>
          <p>Take your workflow to the next level!</p>
          <Link to='/register'>Register</Link>
        </div>
      )}
      
    </div>
  )
}

export default Home