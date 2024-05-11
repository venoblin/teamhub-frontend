import { BugType } from "./bug"
import { EventType } from "./event"
import { NotificationType } from "./notification"
import { ProjectType } from "./project"
import { TodoType } from "./todo"
import { UserType } from "./user"

export interface UserPropsType extends Props {
  user: UserType
}

export interface ProjectPropsType extends Props {
  project: ProjectType
}

export interface SetProjectPropsType extends ProjectPropsType {
  setProject: React.Dispatch<React.SetStateAction<ProjectType>>
}

export interface EventPropsType extends Props {
  singleEvent: EventType
}

export interface NotificationPropsType extends Props {
  singleNotification: NotificationType
}

export interface BugPropsType extends SetProjectPropsType {
  singleBug: BugType
}

export interface TodoPropsType extends SetProjectPropsType {
  singleTodo: TodoType
}

export interface UiPropsType extends React.PropsWithChildren {
  className?: string
}

export interface EventsPropsType extends Props {
  events: EventType[]
}

export interface FeedPropsType extends EventsPropsType {
  isNotPanel?: boolean
}

export interface PopUpProps extends React.PropsWithChildren {
  component: Element
}

export interface PropsWithMessage {
  message: string
}