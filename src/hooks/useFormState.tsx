import { useState } from "react"

const useFormState = (...args: string[]) => {
  const initObj: any = {}
  args.forEach((arg: string) => {
    initObj[arg] = ''
  })
  const [state, setState] = useState(initObj)

  return [state, setState]
}

export default useFormState