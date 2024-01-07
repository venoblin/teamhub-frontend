import '../../../styles/ProjectFeed.css'
import { ProjectPropsType, SetProjectPropsType } from '../../../types/props'
import Feed from '../../Feed'

const ProjectFeed = (props: SetProjectPropsType) => {
  return (
    <div className='project-feed'>
      <h2>Project Feed</h2>
      <Feed project={props.project} setProject={props.setProject} />
    </div>
  )
}

export default ProjectFeed