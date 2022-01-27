import Link from "next/link"
import Button from "../components/button"
import Input from "../components/input"

import { Container, Content } from "../styles/pages/sign"

export default function SignIn() {
  return (
    <Container>
      <Content>
        <h1>Sign In</h1>
        <Link href="/signup">
          <a>Need an account?</a>
        </Link>
        <form>
          <Input name="username" />
          <Input name="password" type="password" />
          <Button type="blue">Sign In</Button>
        </form>
      </Content>
    </Container>
  )
}
