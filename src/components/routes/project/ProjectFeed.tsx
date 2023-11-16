import '../../../styles/ProjectFeed.css'
import { ProjectPropsType } from '../../../types/props'
import Todos from '../../Todos'
import Bugs from '../../Bugs'

const ProjectFeed = (props: ProjectPropsType) => {
  return (
    <div className='project-feed'>
      <h1>Feed</h1>

      <Todos project={props.project} />
      <Bugs project={props.project} />
    </div>
  )
}

export default ProjectFeed