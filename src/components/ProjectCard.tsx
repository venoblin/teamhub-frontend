import '../styles/ProjectCard.css'
import { useNavigate } from 'react-router-dom'
import { ProjectProps } from '../types/props'
import Card from './ui/Card'

const ProjectCard = (props: ProjectProps) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    console.log('click')
    navigate(`/projects/${props.project.id}`)
  }

  return (
    <Card onClick={clickHandler}>
      <h3>{props.project.name}</h3>
    </Card>
  )
}

export default ProjectCard