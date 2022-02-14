import type { AppProps } from "next/app"
import globalStyles from "../styles/global"

import { AuthProvider } from "../hooks/auth"

import Header from "../components/header"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
