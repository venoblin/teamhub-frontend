import './ProjectTodosRoute.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import useToggle from '../../../../hooks/useToggle'
import useFormState from '../../../../hooks/useFormState'
import { SetProjectPropsType } from '../../../../types/props'
import { changeListen } from '../../../../utils/inputHandler'
import { submit } from '../../../../utils/formHandler'
import Todos from '../../../Todos/Todos'
import { UtilitiesContext } from '../../../../contexts/UtilitiesContext'
import PopUpMessage from '../../../PopUpMessage/PopUpMessage'

const ProjectTodos = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['todo'])
  // switches between success and danger to change btn color
  const [addBtnClass, setAddBtnClass] = useState('success')

  const createTodo = async () => {
    try {
      if (props.project.id) {
        const payload = {
          todo: formState.todo,
          project_id: props.project.id
        }
        await userContext?.postTodo(
          payload, 
          props.project, 
          props.setProject
        )
      }
      toggleMode()
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in posting todo!' />)
    }
  }

  const toggleMode = () => {
    addBtnClass === 'success' ? setAddBtnClass('danger') : setAddBtnClass('success')
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-todos'>
      <button className={`${addBtnClass} add-btn`} onClick={toggleMode}>
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
          <button className='success'>Add Todo</button>
        </form>
      }

      <Todos project={props.project} setProject={props.setProject} />
    </div>
  )
}

export default ProjectTodos