import { useState } from "react"

const useFormState = (init: string[] | Object): any[] => {
  let initObj: any = {}

  if (Array.isArray(init)) {
    init.forEach((arg: string) => {
      initObj[arg] = ''
    })
  } else {
    initObj = {...init}
  }
  
  const [state, setState] = useState<Object>(initObj)

  const resetFormState = () => {
    setState({...initObj})
  }

  return [state, setState, resetFormState]
}

export default useFormState