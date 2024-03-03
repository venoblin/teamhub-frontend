import '../../../styles/ProjectFeed.css'
import { ProjectPropsType, SetProjectPropsType } from '../../../types/props'
import Feed from '../../Feed/Feed'

const ProjectFeed = (props: SetProjectPropsType) => {
  return (
    <div className='project-feed'>
      <Feed isNotPanel={true} events={props.project.events} />
    </div>
  )
}

export default ProjectFeed