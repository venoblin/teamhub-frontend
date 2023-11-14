import { ProjectType } from "./project"

export interface UserPayloadType {
  id: number,
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
  updateUser: () => void,
  findProject: (name: string) => ProjectType | null,
  addProject: (project: ProjectType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}