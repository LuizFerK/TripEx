import Image from "next/image"
import Link from "next/link"
import Button from "../components/button"
import Input from "../components/input"

import { Container, Content } from "../styles/pages/sign"

export default function SignUp() {
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
          <form>
            <Input name="username" placeholder="John Doe" />
            <Input
              name="email"
              type="email"
              placeholder="johndoe@example.com"
            />
            <Input name="password" type="password" placeholder="••••••" />
            <Button>Sign Up</Button>
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
