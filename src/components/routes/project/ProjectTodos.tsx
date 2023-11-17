import '../../../styles/ProjectTodos.css'
import { ProjectPropsType } from '../../../types/props'
import Todos from '../../Todos'

const ProjectTodos = (props: ProjectPropsType) => {
  return (
    <div className='project-todos'>
      <h1>Todos</h1>

      <Todos project={props.project} />
    </div>
  )
}

export default ProjectTodos