import '../../../styles/ProjectBugs.css'
import useToggle from '../../../hooks/useToggle'
import useFormState from '../../../hooks/useFormState'
import { SetProjectPropsType } from '../../../types/props'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import Bugs from '../../Bugs'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

const ProjectBugs = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['bug', 'bug_info'])

  const createBug = async () => {
    if (props.project.id) {
      const payload = {
        bug: formState.bug,
        bug_info: formState.bug_info,
        project_id: props.project.id
      }
      await userContext?.postBug(payload, props.project, props.setProject)
      resetFormState()
      toggleAddMode()
    }
  }

  const toggleMode = () => {
    resetFormState()
    toggleAddMode()
  }
  
  return (
    <div className='project-bugs'>
      <h1>Bugs</h1>

      <button onClick={toggleMode}>
        {addMode ? 'X' : 'Add'}
      </button>

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
          <button>Add Bug</button>
        </form>
      }

      <Bugs project={props.project} />
    </div>
  )
}

export default ProjectBugs