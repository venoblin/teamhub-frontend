import '../../../styles/ProjectSettings.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import useFormState from '../../../hooks/useFormState'
import { submit } from '../../../utils/formHandler'
import { changeListen } from '../../../utils/inputHandler'
import { UserContext } from '../../../contexts/UserContext'
import { SetProjectPropsType } from '../../../types/props'
import useToggle from '../../../hooks/useToggle'

const ProjectSettings = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const [formState, setFormState] = useFormState({
    name: props.project.name, 
    git_url: props.project.git_url
  })
  const [isUrlPresent, toggleUrlPresent] = useToggle(props.project.git_url.length ? true : false )
  const navigate = useNavigate()

  const deleteProject = async () => {
    if (props.project.id) {
      await userContext?.deleteProject(props.project)
      navigate('/')
    }
  }

  const renameProject = async () => {
    await userContext?.patchProject(props.project, {name: formState.name}, props.setProject)
  }

  const updateGitLink = async (deleteMode: Boolean = false) => {
    if (!deleteMode) {
      await userContext?.patchProject(props.project, {git_url: formState.git_url}, props.setProject)
      if (!isUrlPresent) toggleUrlPresent()
    } else {
      await userContext?.patchProject(props.project, {git_url: ''}, props.setProject)
      setFormState({...formState, git_url: ''})
      if (isUrlPresent) toggleUrlPresent()
    }
  }
  
  return (
    <div className='project-settings'>
      <h1>Settings</h1>

      <form onSubmit={(evt) => submit(evt, renameProject)}>
        <label htmlFor='name'>Rename Project</label>
        <input
          type='text'
          name='name'
          id='name'
          required
          value={formState.name}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <button>Rename</button>
      </form>

      <form onSubmit={(evt) => submit(evt, updateGitLink)}>
        <label htmlFor='git_link'>{isUrlPresent ? "Change Git Url" : "Add Git Url"}</label>
        <input
          type='url'
          name='git_url'
          id='git_url'
          placeholder='https://git-url.com'
          value={formState.git_url}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <button type='submit'>{isUrlPresent ? "Change" : "Add"}</button>
        <button onClick={() => updateGitLink(true)} type='button'>DELETE URL</button>
      </form> 
      
      <button onClick={deleteProject}>DELETE</button>
    </div>
  )
}

export default ProjectSettings