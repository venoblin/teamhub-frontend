export interface EventPayloadType {
  event: string,
  project_id: number | null
}

export interface EventType extends EventPayloadType {
  id: number,
  time: string
}