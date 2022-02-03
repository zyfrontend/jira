import React, { ReactNode, useContext, useState } from 'react'
import * as auth from '../auth-provider'
import { Users } from '../project-list/search-panel'
interface AuthForm {
  username: string
  password: string
}
const AuthContext = React.createContext<
  | {
      user: Users | null
      register: (form: AuthForm) => Promise<void>
      login: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Users | null>(null)
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  // eslint-disable-next-line react/no-children-prop
  return <AuthContext.Provider children={children} value={{ user, login, logout, register }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 中使用')
  }
  return context
}
