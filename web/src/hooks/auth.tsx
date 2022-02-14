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
    const token = localStorage.getItem("@TripEx:token")
    const user = localStorage.getItem("@TripEx:user")

    if (token && user) {
      return setData({ token, user: JSON.parse(user) })
    }

    return setData({} as AuthState)
  }, [])

  const signIn = useCallback(({ user, token }: AuthState) => {
    localStorage.setItem("@TripEx:token", String(token))
    localStorage.setItem("@TripEx:user", JSON.stringify(user))

    setData({ token, user })

    Router.push("/")
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem("@TripEx:token")
    localStorage.removeItem("@TripEx:user")

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
