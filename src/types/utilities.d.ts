export type LoaderPromiseType = Promise<any> | undefined

export interface UtilitiesContextType {
  showPopUp: (component: JSX.Element) => void,
  load: (promise: LoaderPromiseType) => any

}