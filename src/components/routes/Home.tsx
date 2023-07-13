import RecentProjects from '../RecentProjects'
import Feed from '../Feed'
import '../../styles/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <RecentProjects />
      <Feed />
    </div>
  )
}

export default Home