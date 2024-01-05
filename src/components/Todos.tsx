import '../styles/Todos.css'
import { SetProjectPropsType } from '../types/props'
import TodoCard from './TodoCard'
import Panel from './ui/Panel'

const Todos = (props: SetProjectPropsType) => {

  return (
    <Panel className='todos'>
      <div>
        {props.project?.todos.length ? (
          props.project?.todos.map(singleTodo => (
            <TodoCard 
              key={String(singleTodo.id)} 
              singleTodo={singleTodo}
              project={props.project}
              setProject={props.setProject}
            />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Panel>
  )
}

export default Todos