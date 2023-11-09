import { BugType } from "./bug"
import { TodoType } from "./todo"

export interface ProjectPayloadType {
  name: string,
  owner_id: number | null | undefined
}

export interface ProjectType extends ProjectPayloadType {
  id: number,
  git_url: string,
  bugs: BugType[],
  todos: TodoType[]
}
