import { createContext, PropsWithChildren, useState } from 'react'
import { PopUpContextType } from '../types/popup'
import '../styles/PopUp.css'
import Panel from '../components/ui/Panel/Panel'

export const PopUpContext = createContext<PopUpContextType | null>(null)

export const PopUpProvider = (props: PropsWithChildren) => {
  const [msg, setMsg] = useState('')

  const dismissHandler = () => {
    setMsg('')
  }

  const showPopUp = (msg: string) => {
    setMsg(msg)
  }

  return (
    <PopUpContext.Provider value={{showPopUp}}>
      {props.children}

      {msg.length && 
        <Panel className='pop-up'>
          <Panel className='inner-panel'>
            {msg.length ? (
              <p>{msg}</p>
            ) : (
              <p></p>
            )}
            <button onClick={dismissHandler}>Ok</button>
          </Panel>
        </Panel>
      }
    </PopUpContext.Provider>
  )
}