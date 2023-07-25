import '../styles/RecentProjects.css'
import { useNavigate } from 'react-router-dom'
import Panel from './ui/Panel'

const RecentProjects = () => {
  const navigate = useNavigate()
  
  const newHandler = () => {
    navigate('/projects/new')
  }
  
  return (
    <Panel className="recent-projects">
      <h2>Recent Projects</h2>
      <button onClick={newHandler}>New</button>
    </Panel>
  )
}

export default RecentProjects