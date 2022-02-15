import Cookies from "js-cookie"

import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from "react"
import Router from "next/router"

interface User {
  username: string
}

interface AuthState {
  token?: string
  user?: User
}

interface AuthContextData {
  user: User | undefined
  signIn(data: AuthState): void
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState({} as AuthState)

  useEffect(() => {
    const token = Cookies.get("TripEx_token")
    const user = Cookies.get("TripEx_user")

    if (token && user) {
      return setData({ token, user: JSON.parse(user) })
    }

    return setData({} as AuthState)
  }, [])

  const signIn = useCallback(({ user, token }: AuthState) => {
    Cookies.set("TripEx_token", String(token))
    Cookies.set("TripEx_user", JSON.stringify(user))

    setData({ token, user })

    Router.push("/")
  }, [])

  const signOut = useCallback(() => {
    Cookies.remove("TripEx_token")
    Cookies.remove("TripEx_user")

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}
