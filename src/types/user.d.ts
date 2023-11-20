import { ProjectPayloadType, ProjectType } from "./project"
import { TodoPayloadType, TodoType } from "./todo"

export interface UserType {
  id: number | null,
  name: string,
  username: string,
  email: string
}

export interface UserContextType {
  user: UserType,
  setUser: (user: UserType) => void,
  getAndSetUser: (id: number) => void,
  updateUser: () => void,
  projects: ProjectType[],
  setProjects: (projects: ProjectType[]) => void,
  findProject: (name: string) => ProjectType | null,
  postProject: (payload: ProjectPayloadType) => void,
  deleteProject: (project: ProjectType) => void,
  postTodo: (payload: TodoPayloadType, project: ProjectType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}