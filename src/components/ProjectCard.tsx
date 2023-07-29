import '../styles/ProjectCard.css'
import { ProjectProps } from '../types/project'
import Card from './ui/Card'

const ProjectCard = (props: ProjectProps) => {
  return (
    <Card>
      <h3>{props.project.name}</h3>
    </Card>
  )
}

export default ProjectCard