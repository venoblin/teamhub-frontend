import { BugPatchType, BugPayloadType, BugType } from "./bug"
import { ContributionType, ContributorType } from "./contributor"
import { ProjectPatchType, ProjectPayloadType, ProjectType } from "./project"
import { TodoPatchType, TodoPayloadType, TodoType } from "./todo"
import { NotificationPatchType, NotificationPayloadType, NotificationType } from "./notification"
import { LoginType } from "./auth"

export interface UserType {
  id: number | null,
  name: string,
  username: string,
  email: string
}

export interface UserContextType {
  user: UserType,
  setUser: (user: UserType) => void,
  loginUser: (payload: LoginType) => void,
  getAndSetUser: (id: number) => void,
  userProjects: ProjectType[],
  setUserProjects: (projects: ProjectType[]) => void,
  findProject: (name: string) => ProjectType | null,
  postProject: (payload: ProjectPayloadType) => void,
  deleteProject: (project: ProjectType) => void,
  patchProject: (project: ProjectType, update: ProjectPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  postTodo: (payload: TodoPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  deleteTodo: (project: ProjectType, todoId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  patchTodo: (project: ProjectType, bug: TodoType, update: TodoPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  postBug: (payload: BugPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  deleteBug: (project: ProjectType, bugId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  patchBug: (project: ProjectType, bug: BugType, update: BugPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  userContributions: ContributionType[] | ContributorType[],
  setUserContributions: (contributions: ContributionType[] | ContributorType[]) => void,
  userNotifications: NotificationType[],
  setUserNotifications: (notification: NotificationType[]) => void,
  postNotification: (payload: NotificationPayloadType) => void,
  patchNotification: (notification: NotificationType, payload: NotificationPatchType) => void,
  deleteNotification: (notification: NotificationType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}