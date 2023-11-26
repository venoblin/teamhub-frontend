import '../../../styles/ProjectSettings.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import useFormState from '../../../hooks/useFormState'
import { submit } from '../../../utils/formHandler'
import { changeListen } from '../../../utils/inputHandler'
import { UserContext } from '../../../contexts/UserContext'
import { ProjectPropsType } from '../../../types/props'

const ProjectSettings = (props: ProjectPropsType) => {
  const userContext = useContext(UserContext)
  const [formState, setFormState, resetFormState] = useFormState(['name', 'git_url'])
  const navigate = useNavigate()

  const deleteProject = async () => {
    if (props.project.id) {
      await userContext?.deleteProject(props.project)
      navigate('/')
    }
  }
  
  return (
    <div className='project-settings'>
      <h1>Settings</h1>

      <form>
        <label htmlFor='name'>Rename</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />
      </form>

      <button onClick={deleteProject}>DELETE</button>
    </div>
  )
}

export default ProjectSettings