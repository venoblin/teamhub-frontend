import '../../styles/Project.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import useProject from '../../hooks/useProject'
import { UserContext } from '../../contexts/UserContext'
import ProjectNav from '../ProjectNav'
import ProjectFeed from './project/ProjectFeed'

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
        <ProjectNav project={project} />
      }

      <Routes>
        <Route path='/' element={<ProjectFeed project={project} />} />
      </Routes>
      
      
    </div>
  )
}

export default Project