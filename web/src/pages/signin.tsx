import Link from "next/link"

import {
  Container,
  Content,
  Fieldset,
  Label,
  Input,
  Button
} from "../styles/pages/signin"

export default function SignIn() {
  return (
    <Container>
      <Content>
        <h1>Sign In</h1>
        <Link href="/signup">
          <a>Need an account?</a>
        </Link>
        <form>
          <Fieldset>
            <Label htmlFor="username">Username</Label>
            <Input id="username" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input id="password" />
          </Fieldset>
          <Button>Sign In</Button>
        </form>
      </Content>
    </Container>
  )
}
