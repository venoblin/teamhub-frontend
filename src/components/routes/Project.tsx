import '../../styles/Project.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { ProjectType } from '../../types/project'
import Todos from '../Todos'
import Bugs from '../Bugs'
import ProjectNav from '../ProjectNav'

const Project = () => {
  const userContext = useContext(UserContext)
  const [project, setProject] = useState<ProjectType | null>(null)
  const { projectName } = useParams()

  const findProject = () => {
    userContext?.user.projects?.forEach(project => {
      if (project.name === projectName) setProject(project)
    })
  }

  useEffect(() => {
    findProject()
  }, [])

  return (
    <div className='project'>
      <ProjectNav owner={userContext?.user} project={project} />
      
      <h1>{project?.name}</h1>

      <Todos project={project} />
      <Bugs project={project} />
    </div>
  )
}

export default Project