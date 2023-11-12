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

  useEffect(() => {
    if (projectName) {
      const foundProject = userContext?.findProject(projectName)
      setProject(foundProject)
    }
  }, [])

  return (
    <div className='project'>
      {userContext?.user &&
        <ProjectNav owner={userContext.user} project={project} />
      }
      
      <h1>{project?.name}</h1>

      <Todos project={project} />
      <Bugs project={project} />
    </div>
  )
}

export default Project