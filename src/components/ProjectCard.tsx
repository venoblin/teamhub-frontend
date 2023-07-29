import '../styles/ProjectCard.css'
import { Project } from '../types/project'
import Card from './ui/Card'

const ProjectCard = (project: Project) => {
  return (
    <Card>
      <h3>{project.name}</h3>
    </Card>
  )
}

export default ProjectCard