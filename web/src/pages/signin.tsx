import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Error as ErrorType } from "../clients/apollo"

import Button from "../components/button"
import Input from "../components/input"

import { Container, Content } from "../styles/pages/sign"

export default function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState([] as ErrorType[])

  function isFormatInvalid() {
    return username.length < 1 || password.length < 1
  }

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors([])

    console.log(username, password)

    // const { data, errors: signUpErrors } = await signIn(
    //   username,
    //   password
    // ).catch(() => ({
    //   data: null,
    //   errors: [{ message: "Wrong username or passoword", details: {} }]
    // }))

    // signUpErrors && setErrors(signUpErrors)

    // if (data?.signup.token) {
    //   signIn({
    //     user: data.signup.user,
    //     token: data.signup.token
    //   })
    // }
  }

  return (
    <Container>
      <Image
        width={1178}
        height={1080}
        src="/sign_bg.png"
        alt="Beach"
        priority
      />
      <h2>Make your dream trip come true</h2>
      <p>The best prices and places for you and your family!</p>
      <Content>
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmitForm}>
            <Input
              name="username"
              placeholder="John Doe"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              placeholder="••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              disabled={isFormatInvalid()}
              option={isFormatInvalid() ? "disabled" : "default"}
            >
              Sign In
            </Button>
          </form>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            !
          </p>
        </div>
      </Content>
    </Container>
  )
}
