import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import useProject from './useProject'
import { ProjectType } from '../types/project'

const useFoundProject = (projectName: string | undefined): [ProjectType, React.Dispatch<React.SetStateAction<ProjectType>>] => {
  const userContext = useContext(UserContext)
  const [project, setProject] = useProject()

  if (typeof projectName !== 'undefined') {
    const foundProject = userContext?.findProject(projectName)

    if (foundProject) {
      setProject(foundProject)
      return [project, setProject]
    }
  }

  return [project, setProject]
}

export default useFoundProject