import Image from "next/image"
import Link from "next/link"
import Button from "../components/button"
import Input from "../components/input"

import { Container, Content } from "../styles/pages/sign"

export default function SignIn() {
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
          <form>
            <Input name="username" placeholder="John Doe" />
            <Input name="password" type="password" placeholder="••••••" />
            <Button>Sign In</Button>
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
