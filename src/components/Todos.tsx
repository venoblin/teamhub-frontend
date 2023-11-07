import '../styles/Todos.css'
import { ProjectPropsType } from '../types/props'
import Panel from './ui/Panel'

const Todos = (props: ProjectPropsType) => {
  return (
    <Panel className='todos'>
      <h2>Todos</h2>
      <div>
        {props.project?.todos.length ? (
          props.project?.todos.map(singleTodo => (
            <p key={String(singleTodo.id)}>{singleTodo.todo}</p>
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Panel>
  )
}

export default Todos