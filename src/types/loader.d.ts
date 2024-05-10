export interface LoaderContextType {
  load: (promise: Promise<any> | undefined) => any
}