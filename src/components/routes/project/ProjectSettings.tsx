import '../../../styles/ProjectSettings.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { ProjectPropsType } from '../../../types/props'

const ProjectSettings = (props: ProjectPropsType) => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const deleteProject = async () => {
    if (props.project.id) {
      await userContext?.deleteProject(props.project)
      navigate('/')
    }
  }
  
  return (
    <div className='project-settings'>
      <h1>Project settings</h1>

      <button onClick={deleteProject}>DELETE</button>
    </div>
  )
}

export default ProjectSettings