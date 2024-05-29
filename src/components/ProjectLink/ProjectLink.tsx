import './ProjectLink.css'
import { Link } from 'react-router-dom'
import { ProjectPropsType } from '../../types/props'

const ProjectLink = (props: ProjectPropsType) => {
  
  return (
    <Link to={`/${props.project?.owner.username}/${props.project?.name}`} className='project-link'>
      {`${props.project?.owner.username}/${props.project?.name}`}
    </Link>
  )
}

export default ProjectLink