import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signUp, Error as ErrorType } from "../clients/apollo"
import { useAuth } from "../hooks/auth"
import Button from "../components/button"
import Input from "../components/input"

import { Container, Content, Error } from "../styles/pages/sign"

export default function SignUp() {
  const { signIn } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState([] as ErrorType[])

  function isFormatInvalid() {
    return username.length < 1 || email.length < 1 || password.length < 1
  }

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors([])

    const { data, errors: signUpErrors } = await signUp(
      username,
      email,
      password
    ).catch(() => ({
      data: null,
      errors: [{ message: "Unexpected error, try again later...", details: {} }]
    }))

    signUpErrors && setErrors(signUpErrors)

    if (!signUpErrors && data?.signup) {
      signIn({
        user: data.signup.user,
        token: data.signup.token
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
          <h1>Sign Up</h1>
          {errors.length > 0 && (
            <Error>
              {errors.map(error => (
                <div key={error.message}>
                  <strong>{error.message}</strong>
                  {error.details.username && (
                    <div>
                      <b>Username: </b>
                      <span>{error.details.username}</span>
                    </div>
                  )}
                  {error.details.email && (
                    <div>
                      <b>Email: </b>
                      <span>{error.details.email}</span>
                    </div>
                  )}
                  {error.details.password && (
                    <div>
                      <b>Password: </b>
                      <span>{error.details.password}</span>
                    </div>
                  )}
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
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              Sign Up
            </Button>
          </form>
          <p>
            Have an account?{" "}
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            !
          </p>
        </div>
      </Content>
    </Container>
  )
}
