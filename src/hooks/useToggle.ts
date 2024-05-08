import { useState } from 'react'

const useToggle = (initialState: Boolean = false): any[] => {
  const [toggleState, setToggleState] = useState<Boolean>(initialState)

  const toggle = (bool?: Boolean) => {
    if (bool && bool !== toggleState) {
      setToggleState(bool)
    } else { 
      setToggleState(currState => !currState)
    }
  }

  const resetToggle = () => {
    setToggleState(initialState)
  }

  return [toggleState, toggle, resetToggle]
}

export default useToggle