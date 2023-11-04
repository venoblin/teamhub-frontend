export interface ProjectPayloadType {
  name: String,
  owner_id: Number | null | undefined
}

export interface ProjectType extends ProjectPayloadType {
  id: Number,
  bugs: string[],
  todos: string[]
}
