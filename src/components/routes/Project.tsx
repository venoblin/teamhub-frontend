import '../../styles/Project.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import useProject from '../../hooks/useProject'
import { UserContext } from '../../contexts/UserContext'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectFeed from './project/ProjectFeed'
import ProjectSettings from './project/ProjectSettings'
import ProjectTodos from './project/ProjectTodos'
import ProjectBugs from './project/ProjectBugs'

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
      <ProjectNav project={project} />
      
      <div className='project-container'>
        <Routes>
          <Route path='/' element={<ProjectFeed project={project} setProject={setProject} />} />
          <Route path='/settings' element={<ProjectSettings project={project} setProject={setProject} />} />
          <Route path='/todos' element={<ProjectTodos project={project} setProject={setProject} />} />
          <Route path='/bugs' element={<ProjectBugs project={project} setProject={setProject} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Project