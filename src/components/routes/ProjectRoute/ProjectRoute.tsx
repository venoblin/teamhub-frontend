import './ProjectRoute.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import useProject from '../../../hooks/useProject'
import { UserContext } from '../../../contexts/UserContext'
import ProjectNav from '../../ProjectNav/ProjectNav'
import ProjectFeedRoute from '../project-routes/ProjectFeedRoute/ProjectFeedRoute'
import ProjectSettingsRoute from '../project-routes/ProjectSettingsRoute/ProjectSettingsRoute'
import ProjectTodosRoute from '../project-routes/ProjectTodosRoute/ProjectTodosRoute'
import ProjectBugsRoute from '../project-routes/ProjectBugsRoute/ProjectBugsRoute'

const ProjectRoute = () => {
  const userContext = useContext(UserContext)
  const [project, setProject] = useProject()
  const { ownerUsername, projectName } = useParams()

  useEffect(() => {
    if (typeof ownerUsername !== 'undefined' && typeof projectName !== 'undefined') {
      const foundProject = userContext?.findProject(ownerUsername, projectName)

      if (foundProject) setProject(foundProject)
    }
  }, [])

  return (
    <div className='project'>
      <ProjectNav project={project} ownerUsername={ownerUsername!} projectName={projectName!} />
      
      <h1>{`${project.owner.username}/${project.name}`}</h1>
      <div className='project-container'>
        <Routes>
          <Route path='/' element={<ProjectFeedRoute project={project} setProject={setProject} />} />
          <Route path='/settings' element={<ProjectSettingsRoute project={project} setProject={setProject} />} />
          <Route path='/todos' element={<ProjectTodosRoute project={project} setProject={setProject} />} />
          <Route path='/bugs' element={<ProjectBugsRoute project={project} setProject={setProject} />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProjectRoute