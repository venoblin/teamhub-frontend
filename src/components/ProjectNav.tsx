import '../styles/ProjectNav.css'
import { Link } from 'react-router-dom'
import { ProjectLinkPropsType } from '../types/props'

const ProjectNav = (props: ProjectLinkPropsType) => {
  return (
    <nav>
      <div className='links'>
        <Link to={`/${props.owner.username}/${props.project?.name}`} target='_blank'>Feed</Link>
      </div>

      <div className='icon-links'>
        <Link to='' target='_blank'>Git</Link>
      </div>
    </nav>
  )
}

export default ProjectNav