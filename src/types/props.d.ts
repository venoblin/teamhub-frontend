import { BugType } from "./bug"
import { ProjectType } from "./project"
import { TodoType } from "./todo"
import { UserType } from "./user"

export interface ProjectPropsType extends Props {
  project: ProjectType,
}

export interface SetProjectPropsType extends ProjectPropsType {
  setProject: React.Dispatch<React.SetStateAction<ProjectType>>
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
