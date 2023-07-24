import '../../styles/Home.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import RecentProjects from '../RecentProjects'
import Feed from '../Feed'

const Home = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="home">
      <h1>Home</h1>

      {userContext?.authenticated ? (
        <div>
          <RecentProjects />
          <Feed />
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