import { gql } from "@apollo/client"
import client from "../../apollo"

import { Error } from "../../apollo"

interface SignUpMutation {
  data: {
    signup: {
      user: {
        username: string
      }
      token: string
    }
  }
  errors?: Error[]
}

export default async function signUp(
  username: string,
  email: string,
  password: string
) {
  const data = await client().mutate({
    mutation: gql`
        mutation SignUp {
          signup(username: "${username}", email: "${email}", password: "${password}") {
            user {
              username
            }
            token
          }
        }
      `,
    errorPolicy: "all"
  })

  return data as SignUpMutation
}
