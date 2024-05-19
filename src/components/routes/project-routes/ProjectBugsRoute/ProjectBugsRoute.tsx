import './ProjectBugsRoute.css'
import useToggle from '../../../../hooks/useToggle'
import useFormState from '../../../../hooks/useFormState'
import { SetProjectPropsType } from '../../../../types/props'
import { changeListen } from '../../../../utils/inputHandler'
import { submit } from '../../../../utils/formHandler'
import Bugs from '../../../Bugs/Bugs'
import { useContext, useState } from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import { UtilitiesContext } from '../../../../contexts/UtilitiesContext'
import PopUpMessage from '../../../PopUpMessage/PopUpMessage'
import ButtonSwitch from '../../../ui/ButtonSwitch/ButtonSwitch'

const ProjectBugsRoute = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['bug', 'bug_info'])

  const createBug = async () => {
    try {
      if (props.project.id) {
        const payload = {
          bug: formState.bug,
          bug_info: formState.bug_info,
          project_id: props.project.id
        }
        await utilitiesContext?.load(userContext?.postBug(
          payload, 
          props.project, 
          props.setProject
        ))
      } 
      resetFormState()
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error posting bug!' />)
    }
  }

  const toggleMode = () => {
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-bugs'>
      <ButtonSwitch onClick={toggleMode}>Add</ButtonSwitch>

      {addMode && 
        <form onSubmit={(evt) => submit(evt, createBug)}>
          <label htmlFor="bug">Bug</label>
          <input 
            type='bug' 
            id='bug' 
            name='bug' 
            required
            value={formState.bug}
            onChange={(evt) => changeListen(evt, formState, setFormState)}
          />

          <label htmlFor="bug_info">Bug Info (optional)</label>
          <input 
            type='bug_info' 
            id='bug_info' 
            name='bug_info'
            value={formState.bug_info}
            onChange={(evt) => changeListen(evt, formState, setFormState)}
          />
          <button className='success'>Add Bug</button>
        </form>
      }

      <Bugs project={props.project} setProject={props.setProject} />
    </div>
  )
}

export default ProjectBugsRoute