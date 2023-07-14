import '../../styles/Project.css'
import Todos from '../Todos'
import Bugs from '../Bugs'

const Project = () => {
  return (
    <div className='project'>
      <h1>Project</h1>

      <Todos />
      <Bugs />
    </div>
  )
}

export default Project