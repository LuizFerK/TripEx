import { gql } from "@apollo/client"
import client from "../../apollo"

import { Error } from "../../apollo"

interface SignInMutation {
  data: {
    signin: {
      user: {
        username: string
      }
      token: string
    }
  }
  errors?: Error[]
}

export default async function signIn(username: string, password: string) {
  const data = await client().mutate({
    mutation: gql`
      mutation signIn {
        signin(username: "${username}", password: "${password}") {
          user {
            username
          }
          token
        }
      }
    `,
    errorPolicy: "all"
  })

  return data as SignInMutation
}
