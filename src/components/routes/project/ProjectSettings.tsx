import '../../../styles/ProjectSettings.css'
import { useNavigate } from 'react-router-dom'
import { DeleteProject } from '../../../services'
import { ProjectPropsType } from '../../../types/props'

const ProjectSettings = (props: ProjectPropsType) => {
  const navigate = useNavigate()

  const deleteProject = () => {
    DeleteProject(props.project.id)
    navigate('/')
  }
  
  
  return (
    <div className='project-settings'>
      <h1>Project settings</h1>

      <button onClick={deleteProject}>DELETE</button>
    </div>
  )
}

export default ProjectSettings