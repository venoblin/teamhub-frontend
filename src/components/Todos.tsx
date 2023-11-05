import '../styles/Todos.css'
import { ProjectPropsType } from '../types/props'

const Todos = (props: ProjectPropsType) => {
  return (
    <div className='todos'>
      <h2>Todos</h2>
      <div>
        {props.project?.todos.length ? (
          props.project?.todos.map(singleTodo => (
            <p>{ singleTodo.todo }</p>
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </div>
  )
}

export default Todos