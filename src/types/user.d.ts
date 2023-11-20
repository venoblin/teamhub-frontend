import { ProjectPayloadType, ProjectType } from "./project"
import { TodoPayloadType, TodoType } from "./todo"

export interface UserPayloadType {
  id: number | null,
  name: string,
  username: string,
  email: string
}

export interface UserType extends UserPayloadType {
  projects: ProjectType[]
}

export interface UserContextType {
  user: UserType,
  setUser: (user: UserType) => void,
  getAndSetUser: (id: number) => void,
  updateUser: () => void,
  findProject: (name: string) => ProjectType | null,
  postProject: (payload: ProjectPayloadType) => void,
  deleteProject: (project: ProjectType) => void,
  postTodo: (payload: TodoPayloadType, project: ProjectType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}