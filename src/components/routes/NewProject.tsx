import '../../styles/NewProject.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import InputHandler from '../../classes/InputHandler'
import FormHandler from '../../classes/FormHandler'
import useFormState from '../../hooks/useFormState'
import { UserContext } from '../../contexts/UserContext'
import { PostProject } from '../../services'

const NewProject = () => {
  const userContext = useContext(UserContext)
  const [formState, setFormState, resetFormState] = useFormState(['name', 'gitUrl'])
  const navigate = useNavigate()

  const createProject = async () => {
    if (userContext?.authenticated) {
      const newProject = await PostProject({
        name: formState.name,
        git_url: formState.gitUrl,
        owner_id: userContext.user.id
      })

      userContext?.addProject(newProject.data)
      navigate(`/${userContext?.user.username}/${formState.name}`)
      resetFormState()
    }
  }
  
  return (
    <div className='new-poject'>
      <h1>New Project</h1>

      <form onSubmit={(evt) => FormHandler.submit(evt, createProject)}>
        <label htmlFor="name">Name</label>
        <input 
          type='name' 
          id='name' 
          name='name' 
          required
          value={formState.name}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <label htmlFor="gitUrl">Git Url (optional)</label>
        <input 
          type='gitUrl' 
          id='gitUrl' 
          name='gitUrl'
          value={formState.gitUrl}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProject