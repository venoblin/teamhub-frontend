export interface UserPayloadType {
  id: Number | null,
  name: String | null,
  username: String | null,
  email: String | null
}

export interface UserType extends UserPayloadType {
  projects: ProjectType[] | null
}

export interface UserContextType {
  user: UserType,
  setUser: (user: UserType) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}