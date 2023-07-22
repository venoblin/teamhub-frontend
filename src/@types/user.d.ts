export interface User {
  name: string
}

export interface UserContextType {
  user: User,
  setUser: (user: User) => void
}