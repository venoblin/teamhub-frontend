export interface User {
  id: Number | null,
  name: String,
  username: String,
  email: String
}

export interface UserContextType {
  user: User,
  setUser: (user: User) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}