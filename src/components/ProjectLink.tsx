import '../styles/ProjectLink.css'
import { Link } from 'react-router-dom'
import { ProjectLinkPropsType } from '../types/props'

const ProjectLink = (props: ProjectLinkPropsType) => {
  
  return (
    <Link to={`/${props.owner.username}/${props.project.name}`} className='project-link'>
      {`${props.owner.username}/${props.project.name}`}
    </Link>
  )
}

export default ProjectLink