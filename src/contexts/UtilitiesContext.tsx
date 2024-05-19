import { createContext, PropsWithChildren, useState } from 'react'
import useToggle from '../hooks/useToggle'
import PopUp from '../components/ui/PopUp/PopUp'
import Loader from '../components/Loader/Loader'
import Panel from '../components/ui/Panel/Panel'
import { UtilitiesContextType } from '../types/utilities'

export const UtilitiesContext = createContext<UtilitiesContextType | null>(null)

export const UtilitiesProvider = (props: PropsWithChildren) => {
  const [isLoading, toggleIsLoading] = useToggle()
  const [isShowing, toggleIsShowing] = useToggle()
  const [componentToShow, setComponentToShow] = useState<JSX.Element>(<p></p>)

  const load = (promise: Promise<any> | undefined) => {
    toggleIsLoading()
    return promise?.then((res) => {
      toggleIsLoading()
      return res
    }).catch(() => {
      toggleIsLoading()
      throw new Error()
    })
  }

  const showPopUp = (component: JSX.Element) => {
    setComponentToShow(component)
    toggleIsShowing()
  }

  const dismissPopUp = () => {
    toggleIsShowing()
  }
  
  return (
    <UtilitiesContext.Provider value={{load, showPopUp}}>
      {props.children}

      {isLoading && 
        <PopUp>
          <Loader />
        </PopUp>
      }

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
    </UtilitiesContext.Provider>
  )
}