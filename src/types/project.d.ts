import { BugType } from "./bug"
import { TodoType } from "./todo"

export interface ProjectPayloadType {
  name: string,
  git_url: string,
  owner_id?: number | null
}

export interface ProjectType extends ProjectPayloadType {
  id: number | null,
  bugs: BugType[],
  todos: TodoType[]
}

export interface ProjectPatchPayload {
  name?: string,
  git_url?: string
}