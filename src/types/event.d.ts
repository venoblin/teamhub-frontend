export interface EventPayloadType {
  event: string,
  project_id: number
}

export interface EventType extends EventPayloadType {
  id: number,
  time: string
}