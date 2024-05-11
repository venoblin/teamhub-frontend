import { createContext, PropsWithChildren } from 'react'
import { LoaderContextType } from '../types/loader'
import useToggle from '../hooks/useToggle'
import PopUp from '../components/ui/PopUp/PopUp'
import Loader from '../components/Loader/Loader'

export const LoaderContext = createContext<LoaderContextType | null>(null)

export const LoaderProvider = (props: PropsWithChildren) => {
  const [isLoading, toggleIsLoading] = useToggle(false)

  const load = (promise: Promise<any> | undefined) => {
    toggleIsLoading()
    return promise?.then(() => {
      toggleIsLoading()
    }).catch(() => {
      toggleIsLoading()
      throw new Error()
    })
  }
  
  return (
    <LoaderContext.Provider value={{load}}>
      {props.children}

      {isLoading && 
        <PopUp>
          <Loader />
        </PopUp>
      }
    </LoaderContext.Provider>
  )
}
