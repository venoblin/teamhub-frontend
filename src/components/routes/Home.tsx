import '../../styles/Home.css'
import RecentProjects from '../RecentProjects'
import Feed from '../Feed'

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <RecentProjects />
      <Feed />
    </div>
  )
}

export default Home