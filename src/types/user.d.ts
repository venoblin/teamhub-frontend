import { ProjectType } from "./project"

export interface UserPayloadType {
  id: number | null,
  name: string | null,
  username: string | null,
  email: string | null
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