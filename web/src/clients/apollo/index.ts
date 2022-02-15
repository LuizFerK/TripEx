import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import Cookies from "js-cookie"

const HTTP_ENDPOINT = "http://127.0.0.1:4000/api"

export interface Error {
  message: string
  details: {
    username?: string[]
    email?: string[]
    password?: string[]
  }
}

export default function createApolloClient(authToken?: string) {
  const httpLink = createHttpLink({
    uri: HTTP_ENDPOINT
  })

  const authLink = setContext((_, test) => {
    console.log(`Bearer ${authToken}`)

    return {
      headers: {
        ...test.headers,
        authorization: authToken ? `Bearer ${authToken}` : ""
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink) as any,
    cache: new InMemoryCache()
  })
}
