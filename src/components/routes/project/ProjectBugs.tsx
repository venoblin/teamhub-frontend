import '../../../styles/ProjectBugs.css'
import useToggle from '../../../hooks/useToggle'
import useFormState from '../../../hooks/useFormState'
import { ProjectPropsType } from '../../../types/props'
import InputHandler from '../../../classes/InputHandler'
import FormHandler from '../../../classes/FormHandler'
import Bugs from '../../Bugs'

const ProjectBugs = (props: ProjectPropsType) => {
  const [addMode, toggleAddMode] = useToggle(false)
  const [formState, setFormState, resetFormState] = useFormState(['bug', 'bug_info'])

  const createBug = () => {
    resetFormState()
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
        <form onSubmit={(evt) => FormHandler.submit(evt, createBug)}>
          <label htmlFor="bug">Bug</label>
          <input 
            type='bug' 
            id='bug' 
            name='bug' 
            required
            value={formState.bug}
            onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
          />

          <label htmlFor="bug_info">Bug Info (optional)</label>
          <input 
            type='bug_info' 
            id='bug_info' 
            name='bug_info'
            value={formState.bug_info}
            onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
          />
          <button>Add Bug</button>
        </form>
      }

      <Bugs project={props.project} />
    </div>
  )
}

export default ProjectBugs