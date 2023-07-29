export interface UserPayload {
  id: Number | null,
  name: String | null,
  username: String | null,
  email: String | null
}

export interface User extends UserPayload {
  projects: Project[] | null
}

export interface UserContextType {
  user: User,
  setUser: (user: User) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}