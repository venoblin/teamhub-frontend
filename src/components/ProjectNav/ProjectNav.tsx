import './ProjectNav.css'
import { Link } from 'react-router-dom'
import { ProjectPropsType } from '../../types/props'

const ProjectNav = (props: ProjectPropsType & {ownerUsername: string, projectName: string}) => {
  const projectLink = `/${props.ownerUsername}/${props.projectName}`
  
  return (
    <nav className='project-nav'>
      <div className='links'>
        <Link className='project-name' to={projectLink}>Feed</Link>

        <Link to={`${projectLink}/todos`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/>
          </svg>
        </Link>

        <Link to={`${projectLink}/bugs`}>Bugs</Link>
        
        <Link to={`${projectLink}/settings`}>Settings</Link>
      </div>

      <div className='icon-links'>
        {props.project?.git_url.length ? (
          <Link to={props.project.git_url} target='_blank'>Git</Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}

export default ProjectNav