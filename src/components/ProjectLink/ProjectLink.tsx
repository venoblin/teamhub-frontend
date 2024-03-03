import './ProjectLink.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { ProjectPropsType } from '../../types/props'

const ProjectLink = (props: ProjectPropsType) => {
  const userContext = useContext(UserContext)
  
  return (
    <Link to={`/${userContext?.user.username}/${props.project?.name}`} className='project-link'>
      {`${userContext?.user.username}/${props.project?.name}`}
    </Link>
  )
}

export default ProjectLink