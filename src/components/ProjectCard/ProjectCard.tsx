import 'ProjectCard.css'
import { ProjectPropsType } from '../../types/props'
import Card from '../ui/Card'

const ProjectCard = (props: ProjectPropsType) => {

  return (
    <Card>
      <h3>{props.project?.name}</h3>
    </Card>
  )
}

export default ProjectCard