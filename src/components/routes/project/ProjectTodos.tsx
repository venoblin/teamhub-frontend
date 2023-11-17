import '../../../styles/ProjectTodos.css'
import useToggle from '../../../hooks/useToggle'
import useFormState from '../../../hooks/useFormState'
import { ProjectPropsType } from '../../../types/props'
import InputHandler from '../../../classes/InputHandler'
import FormHandler from '../../../classes/FormHandler'
import Todos from '../../Todos'

const ProjectTodos = (props: ProjectPropsType) => {
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['todo'])

  const createTodo = () => {
    console.log('todo')
    resetFormState()
  }
  
  return (
    <div className='project-todos'>
      <h1>Todos</h1>

      <button onClick={toggleAddMode}>Add</button>
      {addMode && 
        <form onSubmit={(evt) => FormHandler.submit(evt, createTodo)}>
          <label htmlFor="todo">Todo</label>
          <input 
            type='todo' 
            id='todo' 
            name='todo' 
            required
            value={formState.todo}
            onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
          />
          <button>Create</button>
        </form>
      }

      <Todos project={props.project} />
    </div>
  )
}

export default ProjectTodos