import { BugType } from "./bug"
import { TodoType } from "./todo"

export interface ProjectPayloadType {
  name: String,
  owner_id: Number | null | undefined
}

export interface ProjectType extends ProjectPayloadType {
  id: Number,
  git_url: String,
  bugs: BugType[],
  todos: TodoType[]
}
