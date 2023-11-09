import { Link } from 'react-router-dom'
import '../styles/ProjectNav.css'
import { ProjectPropsType } from '../types/props'

const ProjectNav = (props: ProjectPropsType) => {
  return (
    <nav>
      <div className='links'>
        <Link to=''>Feed</Link>
      </div>

      <div className='icon-links'>
        <button>Git</button>
      </div>
    </nav>
  )
}