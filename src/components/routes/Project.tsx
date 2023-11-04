import '../../styles/Project.css'
import { useParams } from 'react-router-dom'
import { ProjectType } from '../../types/project'
import Todos from '../Todos'
import Bugs from '../Bugs'

const Project = () => {
  const { projectName } = useParams()
  
  const findProject = (project: ProjectType) => {
    
  }

  return (
    <div className='project'>
      <h1>Project</h1>

      <Todos />
      <Bugs />
    </div>
  )
}

export default Project