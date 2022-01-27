import Link from "next/link"
import Button from "../components/button"
import Input from "../components/input"

import { Container, Content } from "../styles/pages/sign"

export default function SignUp() {
  return (
    <Container>
      <Content>
        <h1>Sign Up</h1>
        <Link href="/signin">
          <a>Have an account?</a>
        </Link>
        <form>
          <Input name="username" />
          <Input name="email" type="email" />
          <Input name="password" type="password" />
          <Button type="blue">Sign Up</Button>
        </form>
      </Content>
    </Container>
  )
}
