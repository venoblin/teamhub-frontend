import { BugPatchType, BugPayloadType, BugType } from "./bug"
import { ContributionType, ContributorType } from "./contributor"
import { ProjectPatchType, ProjectPayloadType, ProjectType } from "./project"
import { TodoPatchType, TodoPayloadType, TodoType } from "./todo"
import { NotificationPatchType, NotificationPayloadType, NotificationType } from "./notification"
import { LoginType, RegisterType } from "./auth"

export interface UserType {
  id: number | null,
  name: string,
  username: string,
  email: string
}

export interface UserContextType {
  user: UserType,
  setUser: (user: UserType) => void,
  loginUser: (payload: LoginType) => Promise<void>,
  registerUser: (payload: RegisterType) => Promise<void>,
  getAndSetUser: (id: number) => Promise<void>,
  userProjects: ProjectType[],
  setUserProjects: (projects: ProjectType[]) => void,
  findProject: (ownerUsername: string, projectName: string) => ProjectType | null,
  postProject: (payload: ProjectPayloadType) => Promise<void>,
  deleteProject: (project: ProjectType) => Promise<void>,
  patchProject: (project: ProjectType, update: ProjectPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  postTodo: (payload: TodoPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  deleteTodo: (project: ProjectType, todoId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  patchTodo: (project: ProjectType, bug: TodoType, update: TodoPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  postBug: (payload: BugPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  deleteBug: (project: ProjectType, bugId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  patchBug: (project: ProjectType, bug: BugType, update: BugPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => Project<void>,
  userContributions: ProjectType[],
  setUserContributions: (contributions: ProjectType[]) => void,
  userNotifications: NotificationType[],
  setUserNotifications: (notification: NotificationType[]) => void,
  postNotification: (payload: NotificationPayloadType) => Promise<void>,
  patchNotification: (notification: NotificationType, payload: NotificationPatchType) => Promise<void>,
  deleteNotification: (notification: NotificationType) => Promise<void>,
  acceptProjectInvite: (notification: NotificationType) => Promise<void>,
  leaveProject: (project: ProjectType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}