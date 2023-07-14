import '../../styles/Home.css'
import RecentProjects from '../RecentProjects'
import Feed from '../Feed'
import Card from '../ui/Card'
import Panel from '../ui/Panel'

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <RecentProjects />
      <Feed />
      
      <Card></Card>
      <Panel></Panel>
    </div>
  )
}

export default Home