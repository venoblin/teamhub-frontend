import '../styles/ProjectCard.css'
import { useNavigate } from 'react-router-dom'
import { ProjectPropsType } from '../types/props'
import Card from './ui/Card'

const ProjectCard = (props: ProjectPropsType) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    console.log('click')
    navigate(`/projects/${props.project?.id}`)
  }

  return (
    <Card>
      <h3>{props.project?.name}</h3>
    </Card>
  )
}

export default ProjectCard