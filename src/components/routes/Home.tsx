import '../../styles/Home.css'
import RecentProjects from '../RecentProjects'
import Feed from '../Feed'
import Wrapper from '../ui/Wrapper'

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <RecentProjects />
      <Feed />
      <Wrapper></Wrapper>
    </div>
  )
}

export default Home