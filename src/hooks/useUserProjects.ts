import { useState } from 'react'
import { ProjectType } from '../types/project'

const useUserProjects = (): [ProjectType[], React.Dispatch<React.SetStateAction<ProjectType[]>>] => {
  const [userProjects, setUserProjects] = useState<ProjectType[]>([])

  return [userProjects, setUserProjects]
}

export default useUserProjects