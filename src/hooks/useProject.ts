import { useState } from 'react'
import { ProjectType } from '../types/project'

const useProject = (): [ProjectType, React.Dispatch<React.SetStateAction<ProjectType>>, () => void] => {
  const nullProject = {
    name: '',
    git_url: '',
    owner_id: null,
    id: null,
    bugs: [],
    todos: [],
    events: []
  }
  
  const [project, setProject] = useState<ProjectType>(nullProject)

  const resetProject = () => {
    setProject(nullProject)
  }

  return [project, setProject, resetProject]
}

export default useProject