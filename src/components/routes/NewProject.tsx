import '../../styles/NewProject.css'

const NewProject = () => {
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
        />

        <label htmlFor="gitUrl">Git URL</label>
        <input 
          type='gitUrl' 
          id='gitUrl' 
          name='gitUrl' 
          required 
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProject