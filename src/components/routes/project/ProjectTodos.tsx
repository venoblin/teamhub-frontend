import '../../../styles/ProjectTodos.css'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import useToggle from '../../../hooks/useToggle'
import useFormState from '../../../hooks/useFormState'
import { ProjectPropsType } from '../../../types/props'
import InputHandler from '../../../classes/InputHandler'
import FormHandler from '../../../classes/FormHandler'
import Todos from '../../Todos'

const ProjectTodos = (props: ProjectPropsType) => {
  const userContext = useContext(UserContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['todo'])

  const createTodo = () => {
    if (props.project.id) {
      const payload = {
        todo: formState.todo,
        project_id: props.project.id
      }
      userContext?.postTodo(payload, props.project)
      resetFormState()
    }
  }

  const toggleMode = () => {
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-todos'>
      <h1>Todos</h1>

      <button onClick={toggleMode}>
        {addMode ? 'X' : 'Add'}
      </button>

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
          <button>Add Todo</button>
        </form>
      }

      <Todos project={props.project} />
    </div>
  )
}

export default ProjectTodos