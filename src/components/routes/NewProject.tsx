import '../../styles/NewProject.css'
import InputHandler from '../../classes/InputHandler'
import useFormState from '../../hooks/useFormState'

const NewProject = () => {
  const [formState, setFormState, resetFormState] = useFormState([
    'name',
    'gitUrl'
  ])
  
  return (
    <div className='new-poject'>
      <h1>New Project</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input 
          type='name' 
          id='name' 
          name='name' 
          required
          value={formState.name}
          onChange={(evt) => InputHandler.changeListen(evt, formState, setFormState)}
        />

        <label htmlFor="gitUrl">Git URL</label>
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