import '../styles/ProjectNav.css'
import { Link } from 'react-router-dom'
import { ProjectLinkPropsType } from '../types/props'

const ProjectNav = (props: ProjectLinkPropsType) => {
  return (
    <nav>
      <div className='links'>
        <Link to={`/${props.owner.username}/${props.project?.name}`}>Feed</Link>
      </div>

      <div className='icon-links'>
        {props.project?.git_url.length ? (
          <Link to='' target='_blank'>Git</Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}

export default ProjectNav