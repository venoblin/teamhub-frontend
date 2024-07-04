import './NewProjectRoute.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeListen } from '../../../utils/inputHandler'
import { submit } from '../../../utils/formHandler'
import useFormState from '../../../hooks/useFormState'
import { UserContext } from '../../../contexts/UserContext'
import { UtilitiesContext } from '../../../contexts/UtilitiesContext'
import PopUpMessage from '../../PopUpMessage/PopUpMessage'

const NewProjectRoute = () => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [formState, setFormState, resetFormState] = useFormState(['name', 'git_url', 'is_private'])
  const navigate = useNavigate()

  const createProject = async () => {
    try {
      await utilitiesContext?.load(userContext?.postProject({
        name: formState.name,
        git_url: formState.git_url,
        is_private: formState.is_private
      }))
      navigate(`/${userContext?.user.username}/${formState.name}`)
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error posting project!' />)
    }
    resetFormState()
  }
  
  return (
    <div className='new-poject route'>
      <h1>New Project</h1>

      <form onSubmit={(evt) => submit(evt, createProject)}>
        <label htmlFor="name">Name</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          required
          value={formState.name}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <label htmlFor="git_url">Git Url (optional)</label>
        <input 
          type='url' 
          id='git_url' 
          name='git_url'
          value={formState.git_url}
          onChange={(evt) => changeListen(evt, formState, setFormState)}
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProjectRoute