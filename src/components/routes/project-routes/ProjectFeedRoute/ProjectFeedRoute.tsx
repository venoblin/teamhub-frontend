import './ProjectFeedRoute.css'
import { SetProjectPropsType } from '../../../../types/props'
import Feed from '../../../Feed/Feed'

const ProjectFeedRoute = (props: SetProjectPropsType) => {
  return (
    <div className='project-feed'>
      <Feed isNotPanel={true} events={props.project.events} />
    </div>
  )
}

export default ProjectFeedRoute