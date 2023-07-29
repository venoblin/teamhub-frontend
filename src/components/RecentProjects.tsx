import '../styles/RecentProjects.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import Panel from './ui/Panel'

const RecentProjects = () => {
  const userContext = useContext(UserContext)
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