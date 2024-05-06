import { createContext, PropsWithChildren } from 'react';
import { LoaderContextType } from '../types/loader';
import useToggle from '../hooks/useToggle';
import Panel from '../components/ui/Panel/Panel';

export const LoaderContext = createContext<LoaderContextType | null>(null)

export const LoaderProvider = (props: PropsWithChildren) => {
  const [isLoading, toggleIsLoading] = useToggle()

  const toggleLoading = () => {
    toggleIsLoading()
  }
  
  return (
    <LoaderContext.Provider value={{toggleLoading}}>
      {props.children}

      {isLoading && 
        <Panel className='loader'>
          <span></span>
        </Panel>
      }
    </LoaderContext.Provider>
  )
}
