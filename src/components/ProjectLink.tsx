import '../styles/ProjectLink.css'
import { Link } from 'react-router-dom'
import { ProjectLinkProps } from '../types/props'

const ProjectLink = (props: ProjectLinkProps) => {
  
  return (
    <Link to={`/projects/${props.project.id}`} className='project-link'>
      {`${props.owner.username}/${props.project.name}`}
    </Link>
  )
}

export default ProjectLink