import '../styles/Todos.css'
import { ProjectPropsType } from '../types/props'
import TodoCard from './TodoCard'
import Panel from './ui/Panel'

const Todos = (props: ProjectPropsType) => {
  return (
    <Panel className='todos'>
      <h2>Todos</h2>
      <div>
        {props.project?.todos.length ? (
          props.project?.todos.map(singleTodo => (
            <TodoCard key={String(singleTodo.id)} singleTodo={singleTodo} />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Panel>
  )
}

export default Todos