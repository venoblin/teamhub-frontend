import { BugType } from "./bug"
import { ContributorType } from "./contributor"
import { EventType } from "./event"
import { TodoType } from "./todo"
import { UserType } from "./user"

export interface ProjectPayloadType {
  name: string,
  git_url: string,
  is_private: boolean
  owner_id?: number | null,
}

export interface ProjectType extends ProjectPayloadType {
  contribution_id?: number | null
  owner: UserType,
  id: number | null,
  bugs: BugType[],
  todos: TodoType[],
  events: EventType[],
  contributors: UserType[]
}

export interface ProjectPatchType {
  name?: string,
  git_url?: string
}