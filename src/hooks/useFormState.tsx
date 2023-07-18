import { useState } from "react"

const useFormState = (...args: string[]) => {
  const initObj: any = {}
  args.forEach((arg: string) => {
    initObj[arg] = ''
  })
  const [state, setState] = useState(initObj)

  const resetFormState = () => {
    setState({...initObj})
  }

  return [state, setState, resetFormState]
}

export default useFormState