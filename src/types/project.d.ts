import { BugType } from "./bug"
import { ContributorType } from "./contributor"
import { EventType } from "./event"
import { TodoType } from "./todo"

export interface ProjectPayloadType {
  name: string,
  git_url: string,
  owner_id?: number | null
}

export interface ProjectType extends ProjectPayloadType {
  id: number | null,
  bugs: BugType[],
  todos: TodoType[],
  events: EventType[],
  contributors: ContributorType[]
}

export interface ProjectPatchType {
  name?: string,
  git_url?: string
}