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
import ButtonSwitch from '../../../ui/ButtonSwitch/ButtonSwitch'

const ProjectTodosRoute = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['todo'])

  const createTodo = async () => {
    try {
      if (props.project.id) {
        const payload = {
          todo: formState.todo,
          project_id: props.project.id
        }
        await utilitiesContext?.load(userContext?.postTodo(
          payload, 
          props.project, 
          props.setProject
        ))
      }
      resetFormState()
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in posting todo!' />)
    }
  }

  const toggleMode = () => {
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-todos'>
      <ButtonSwitch onClick={toggleMode}>Add</ButtonSwitch>

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

export default ProjectTodosRoute