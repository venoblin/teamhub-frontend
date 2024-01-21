import { ProjectType } from "../types/project";

export const updateObjInArr = (arr: ProjectType[], objToUpdate: ProjectType, updatedObj: ProjectType) => {
  // replaces / updates specified object inside arr
  const newArr = [...arr]

  newArr.forEach((p, i) => {
    if (p.id === objToUpdate.id) {
      newArr[i] = updatedObj
    }
  })

  return newArr
}