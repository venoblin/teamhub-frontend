import './Home.css'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import RecentProjects from '../../RecentProjects/RecentProjects'

const Home = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="home">
      {userContext?.authenticated ? (
        <div>
          <RecentProjects />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
      
    </div>
  )
}

export default Home