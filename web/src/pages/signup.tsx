import Link from "next/link"
import Button from "../components/button"

import {
  Container,
  Content,
  Fieldset,
  Label,
  Input
} from "../styles/pages/signin"

export default function SignUp() {
  return (
    <Container>
      <Content>
        <h1>Sign Up</h1>
        <Link href="/signin">
          <a>Have an account?</a>
        </Link>
        <form>
          <Fieldset>
            <Label htmlFor="username">Username</Label>
            <Input id="username" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input id="password" />
          </Fieldset>
          <Button type="blue">Sign Up</Button>
        </form>
      </Content>
    </Container>
  )
}
