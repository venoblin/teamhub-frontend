import { BugType } from "./bug"
import { TodoType } from "./todo"

export interface ProjectPayloadType {
  name: string,
  git_url: string,
  owner_id: number | null | undefined
}

export interface ProjectPayloadResType {
  data: ProjectPayloadType
}

export interface ProjectType extends ProjectPayloadType {
  id: number,
  bugs: BugType[],
  todos: TodoType[]
}
