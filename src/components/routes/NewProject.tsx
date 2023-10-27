import '../../styles/NewProject.css'
import { useContext } from 'react'
import InputHandler from '../../classes/InputHandler'
import FormHandler from '../../classes/FormHandler'
import useFormState from '../../hooks/useFormState'
import { UserContext } from '../../contexts/UserContext'
import { PostProject } from '../../services'

const NewProject = () => {
  const userContext = useContext(UserContext)
  const [formState, setFormState, resetFormState] = useFormState(['name'])

  const createProject = () => {  
    PostProject({
      name: formState.name,
      owner_id: userContext?.user.id
    })

    resetFormState()
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

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProject