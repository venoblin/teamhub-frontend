import { useState } from "react"

const useToggle = (initialState: Boolean = false): any[] => {
  const [toggleState, setToggleState] = useState<Boolean>(initialState)

  const toggle = (bool?: Boolean) => {
    if (bool && bool !== toggleState) {
      setToggleState(bool)
    } else { 
      setToggleState(!toggleState)
    }
  }

  return [toggleState, toggle]
}

export default useToggle