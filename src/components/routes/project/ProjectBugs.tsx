import '../../../styles/ProjectBugs.css'
import { ProjectPropsType } from '../../../types/props'
import Bugs from '../../Bugs'

const ProjectBugs = (props: ProjectPropsType) => {
  return (
    <div className='project-bugs'>
      <h1>Bugs</h1>

      <Bugs project={props.project} />
    </div>
  )
}

export default ProjectBugs