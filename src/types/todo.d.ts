export interface TodoPayloadType {
  todo: string,
  project_id: number
}

export interface TodoType extends TodoPayloadType {
  id: number,
  completed: boolean
}

export interface TodoPatchType {
  todo?: string,
  completed?: boolean
}
