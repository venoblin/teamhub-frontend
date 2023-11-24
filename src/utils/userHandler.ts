import { ProjectType } from "../types/project";

export const updateProjects = (projects: ProjectType[], projectToUpdate: ProjectType, updatedProject: ProjectType) => {
  const updatedProjects = [...projects]
    updatedProjects.forEach((p, i) => {
      if (p.id === projectToUpdate.id) {
        updatedProjects[i] = updatedProject
      }
    })

    return updatedProjects
}