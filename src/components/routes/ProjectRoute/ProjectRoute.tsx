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
import ProjectCollaboratorsRoute from '../project-routes/ProjectCollaboratorsRoute/ProjectCollaboratorsRoute'

const ProjectRoute = () => {
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
      
      <h1>{`${userContext?.user.username}/${project.name}`}</h1>
      <div className='project-container'>
        <Routes>
          <Route path='/' element={<ProjectFeedRoute project={project} setProject={setProject} />} />
          <Route path='/settings' element={<ProjectSettingsRoute project={project} setProject={setProject} />} />
          <Route path='/todos' element={<ProjectTodosRoute project={project} setProject={setProject} />} />
          <Route path='/bugs' element={<ProjectBugsRoute project={project} setProject={setProject} />} />
          <Route path='/collaborators' element={<ProjectCollaboratorsRoute project={project} setProject={setProject} />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProjectRoute