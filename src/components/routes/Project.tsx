import '../../styles/Project.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import useProject from '../../hooks/useProject'
import { UserContext } from '../../contexts/UserContext'
import Todos from '../Todos'
import Bugs from '../Bugs'
import ProjectNav from '../ProjectNav'

const Project = () => {
  const userContext = useContext(UserContext)
  const [project, setProject] = useProject()
  const { projectName } = useParams()

  useEffect(() => {
    if (typeof projectName !== 'undefined') {
      const foundProject = userContext?.findProject(projectName)

      if (foundProject) setProject(foundProject)
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