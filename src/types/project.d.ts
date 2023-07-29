export interface ProjectPayload {
  name: String,
  git_url: String,
  owner_id: Number | null | undefined
}

export interface Project extends ProjectPayload {
  id: Number
}
