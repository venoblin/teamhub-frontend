export interface User {
  name: string
}

export interface UserContextType {
  user: User,
  setUser: (user: User) => void,
  authenticated: Boolean,
  toggleAuthenticated: (bool?: Boolean) => any[],
  handleLogout: () => void
}