import type { AppProps } from "next/app"
import globalStyles from "../styles/global"

import Header from "../components/header"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
