import { BugPayloadType } from "./bug"
import { ProjectPatchType, ProjectPayloadType, ProjectType } from "./project"
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
  userProjects: ProjectType[],
  setUserProjects: (projects: ProjectType[]) => void,
  findProject: (name: string) => ProjectType | null,
  postProject: (payload: ProjectPayloadType) => void,
  deleteProject: (project: ProjectType) => void,
  patchProject: (project: ProjectType, update: ProjectPatchType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  postTodo: (payload: TodoPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  deleteTodo: (project: ProjectType, todoId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  postBug: (payload: BugPayloadType, project: ProjectType, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  deleteBug: (project: ProjectType, bugId: number | null, setProject: React.Dispatch<React.SetStateAction<ProjectType>>) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}