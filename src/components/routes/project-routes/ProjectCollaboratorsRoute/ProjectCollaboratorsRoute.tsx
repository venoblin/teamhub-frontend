import './ProjectCollaboratorsRoute.css'
import { SetProjectPropsType } from '../../../../types/props'
import { UserContext } from '../../../../contexts/UserContext'
import { useContext } from 'react'

const ProjectCollaboratorsRoute = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  
  return (
    <div>
      <h1>Collaborators</h1>
    </div>
  )
}

export default ProjectCollaboratorsRoute