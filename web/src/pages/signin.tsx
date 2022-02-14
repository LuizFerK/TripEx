import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signIn as signInRequest, Error as ErrorType } from "../clients/apollo"
import { useAuth } from "../hooks/auth"

import Button from "../components/button"
import Input from "../components/input"

import { Container, Content, Error } from "../styles/pages/sign"

export default function SignIn() {
  const { signIn } = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState([] as ErrorType[])

  function isFormatInvalid() {
    return username.length < 1 || password.length < 1
  }

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors([])

    const { data, errors: signUpErrors } = await signInRequest(
      username,
      password
    ).catch(() => ({
      data: null,
      errors: [{ message: "Unexpected error, try again later...", details: {} }]
    }))

    signUpErrors && setErrors(signUpErrors)

    if (!signUpErrors && data?.signin) {
      signIn({
        user: data.signin.user,
        token: data.signin.token
      })
    }
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
          {errors.length > 0 && (
            <Error>
              {errors.map(error => (
                <div key={error.message}>
                  <strong>{error.message}</strong>
                </div>
              ))}
            </Error>
          )}
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
