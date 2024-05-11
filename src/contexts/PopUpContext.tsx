import '../styles/PopUp.css'
import { createContext, PropsWithChildren, useState } from 'react'
import { PopUpContextType } from '../types/popup'
import useToggle from '../hooks/useToggle'
import PopUp from '../components/ui/PopUp/PopUp'
import Panel from '../components/ui/Panel/Panel'

export const PopUpContext = createContext<PopUpContextType | null>(null)

export const PopUpProvider = (props: PropsWithChildren) => {
  const [isShowing, toggleIsShowing] = useToggle()

  let componentToShow = null

  const showPopUp = (component: Element) => {
    componentToShow = component
    toggleIsShowing()
  }

  return (
    <PopUpContext.Provider value={{showPopUp}}>
      {props.children}

      {isShowing && 
        <PopUp>
          <Panel>
            {componentToShow != null && 
              componentToShow
            }
            <button onClick={toggleIsShowing}>Ok</button>
          </Panel>
        </PopUp>
      }
    </PopUpContext.Provider>
  )
}