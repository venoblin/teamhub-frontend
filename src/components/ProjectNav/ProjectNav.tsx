import './ProjectNav.css'
import { Link } from 'react-router-dom'
import { ProjectPropsType } from '../../types/props'

const ProjectNav = (props: ProjectPropsType & {ownerUsername: string, projectName: string}) => {
  const projectLink = `/${props.ownerUsername}/${props.projectName}`
  
  return (
    <nav className='project-nav'>
      <div className='links'>
        <Link className='project-name' to={projectLink}>Feed</Link>
        <Link to={`${projectLink}/todos`}>Todos</Link>
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