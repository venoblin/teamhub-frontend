
export const updateObjInArr = <T extends {id: number | null}>(arr: T[], objToUpdate: T, updatedObj: T): T[] => {
  // replaces / updates specified object inside arr
  const newArr = [...arr]

  newArr.forEach((p, i) => {
    if (p.id === objToUpdate.id) {
      newArr[i] = updatedObj
    }
  })

  return newArr
}