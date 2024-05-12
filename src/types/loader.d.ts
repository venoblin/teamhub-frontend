export type LoaderPromiseType = Promise<any> | undefined

export interface LoaderContextType {
  load: (promise: LoaderPromiseType) => any
}