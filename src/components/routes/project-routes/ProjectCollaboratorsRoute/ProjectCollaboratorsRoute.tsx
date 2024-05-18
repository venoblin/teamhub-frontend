import './ProjectCollaboratorsRoute.css'
import { SetProjectPropsType } from '../../../../types/props'
import { UserContext } from '../../../../contexts/UserContext'
import { useContext } from 'react'
import Collaborators from '../../../Collaborators/Collaborators'

const ProjectCollaboratorsRoute = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  
  return (
    <div>
      <h1>Collaborators</h1>
      <Collaborators collaborators={props.project.contributors} />
    </div>
  )
}

export default ProjectCollaboratorsRoute