import '../../styles/Project.css'
import Todos from '../Todos'
import Bugs from '../Bugs'

const Project = () => {
  return (
    <div className='Project'>
      <h1>Project</h1>

      <Todos />
      <Bugs />
    </div>
  )
}

export default Project