import '../../../styles/ProjectTodos.css'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import useToggle from '../../../hooks/useToggle'
import useFormState from '../../../hooks/useFormState'
import { SetProjectPropsType } from '../../../types/props'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import Todos from '../../Todos'

const ProjectTodos = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['todo'])

  const createTodo = async () => {
    if (props.project.id) {
      const payload = {
        todo: formState.todo,
        project_id: props.project.id
      }
      await userContext?.postTodo(payload, props.project, props.setProject)
      resetFormState()
      toggleAddMode()
    }
  }

  const toggleMode = () => {
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-todos'>
      <button className='success' onClick={toggleMode}>
        {addMode ? 'X' : 'Add'}
      </button>

      {addMode && 
        <form onSubmit={(evt) => submit(evt, createTodo)}>
          <label htmlFor="todo">Todo</label>
          <input 
            type='todo' 
            id='todo' 
            name='todo' 
            required
            value={formState.todo}
            onChange={(evt) => changeListen(evt, formState, setFormState)}
          />
          <button>Add Todo</button>
        </form>
      }

      <Todos project={props.project} setProject={props.setProject} />
    </div>
  )
}

export default ProjectTodos