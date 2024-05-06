import { createContext, PropsWithChildren } from 'react'
import { PopUpContextType } from '../types/popup'
import useToggle from '../hooks/useToggle'

export const PopUpContext = createContext<PopUpContextType | null>(null)

export const PopUpProvider = (props: PropsWithChildren) => {
  const [isShowing, toggleIsShowing] = useToggle()

  return (
    <PopUpContext.Provider value={{
      isShowing,
      toggleIsShowing
    }}>
      {props.children}
    </PopUpContext.Provider>
  )
}