export interface ProjectPayload {
  name: String,
  owner_id: Number | null | undefined
}

export interface Project extends ProjectPayload {
  id: Number
}
