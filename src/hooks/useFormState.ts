import { useState } from "react"

const useFormState = (keys: string[]): any[] => {
  const initObj: any = {}
  keys.forEach((arg: string) => {
    initObj[arg] = ''
  })
  const [state, setState] = useState<Object>(initObj)

  const resetFormState = () => {
    setState({...initObj})
  }

  return [state, setState, resetFormState]
}

export default useFormState