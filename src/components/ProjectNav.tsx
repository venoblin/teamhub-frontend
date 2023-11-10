import '../styles/ProjectNav.css'
import { Link } from 'react-router-dom'
import { ProjectLinkPropsType } from '../types/props'

const ProjectNav = (props: ProjectLinkPropsType) => {
  const projectLink = `/${props.owner.username}/${props.project?.name}`
  
  return (
    <nav>
      <div className='links'>
        <Link to={projectLink}>Feed</Link>
        <Link to={`${projectLink}/settings`}>Settings</Link>
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