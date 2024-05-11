import { createContext, PropsWithChildren, useState } from 'react'
import { PopUpContextType } from '../types/popup'
import useToggle from '../hooks/useToggle'
import PopUp from '../components/ui/PopUp/PopUp'
import Panel from '../components/ui/Panel/Panel'

export const PopUpContext = createContext<PopUpContextType | null>(null)

export const PopUpProvider = (props: PropsWithChildren) => {
  const [isShowing, toggleIsShowing] = useToggle()
  const [componentToShow, setComponentToShow] = useState<JSX.Element>(<p></p>)
  
  const showPopUp = (component: JSX.Element) => {
    setComponentToShow(component)
    toggleIsShowing()
  }

  const dismissPopUp = () => {
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
            <button onClick={dismissPopUp}>Ok</button>
          </Panel>
        </PopUp>
      }
    </PopUpContext.Provider>
  )
}