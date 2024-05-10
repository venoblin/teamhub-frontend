import '../styles/Loader.css'
import { createContext, PropsWithChildren, useState } from 'react'
import { LoaderContextType } from '../types/loader'
import useToggle from '../hooks/useToggle'
import Panel from '../components/ui/Panel/Panel'

export const LoaderContext = createContext<LoaderContextType | null>(null)

export const LoaderProvider = (props: PropsWithChildren) => {
  const [isLoading, toggleIsLoading] = useToggle(false)

  const load = (promise: Promise<any> | undefined) => {
    let data = null
    
    toggleIsLoading()    
    promise?.then((res) => {
      toggleIsLoading()
      
      data = res
    }).catch((err) => {
      toggleIsLoading()
    })

    return data
  }
  
  return (
    <LoaderContext.Provider value={{load}}>
      {props.children}

      {isLoading && 
        <Panel className='loader'>
          <span></span>
        </Panel>
      }
    </LoaderContext.Provider>
  )
}
