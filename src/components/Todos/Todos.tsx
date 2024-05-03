import './Todos.css'
import { SetProjectPropsType } from '../../types/props'
import TodoCard from '../TodoCard/TodoCard'
import KanbanBoard from '../ui/KanbanBoard/KanbanBoard'

const Todos = (props: SetProjectPropsType) => {
  const todos = props.project.todos.filter(t => !t.completed)
  const completedTodos = props.project.todos.filter(t => t.completed)

  return (
    <KanbanBoard className='todos'>
      <div>
      <h2>Todos</h2>
        {todos.length ? (
          todos.map(singleTodo => (
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

      <div>
      <h2>Completed Todos</h2>
        {completedTodos.length ? (
          completedTodos.map(singleTodo => (
            <TodoCard 
              key={String(singleTodo.id)} 
              singleTodo={singleTodo} 
              project={props.project}
              setProject={props.setProject}
            />
          ))
        ) : (
          <p>No completed todos!</p>
        )}
      </div>
    </KanbanBoard>
  )
}

export default Todos