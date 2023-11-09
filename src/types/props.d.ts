import { BugType } from "./bug"
import { ProjectType } from "./project"
import { TodoType } from "./todo"
import { UserType } from "./user"

export interface ProjectPropsType extends Props {
  project: ProjectType | null
}

export interface ProjectLinkPropsType extends ProjectPropsType {
  owner: UserType
}

export interface BugPropsType extends Props {
  singleBug: BugType
}

export interface TodoPropsType extends Props {
  singleTodo: TodoType
}

export interface UiPropsType extends React.PropsWithChildren {
  className?: string
}
