import './RecentProjects.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import Panel from '../ui/Panel/Panel'
import ProjectLink from '../ProjectLink/ProjectLink'

const RecentProjects = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  
  const newHandler = () => {
    navigate('/projects/new')
  }
  
  return (
    <Panel className="recent-projects">
      <h2>Recent Projects</h2>
      <button className="success" onClick={newHandler}>New</button>

      <div className='projects'>
        {userContext?.userProjects.length ? (
          userContext.userProjects.map(project => (
            <ProjectLink key={project.id} project={project} />
          ))
        ) : (
          <p>No projects found!</p>
        )}
      </div>
    </Panel>
  )
}

export default RecentProjects