import Link from "next/link"
import Button from "./button"

import { Container, Title, Tab } from "../styles/components/header"

export default function Header() {
  return (
    <Container>
      <Link passHref href="/">
        <Title>
          Trip<strong>Ex</strong>
        </Title>
      </Link>
      <nav>
        <Link passHref href="/search">
          <Tab>Find a place</Tab>
        </Link>
        <Link passHref href="/signin">
          <Tab>Sign In</Tab>
        </Link>
        <Link passHref href="/signup">
          <a>
            <Button>Sign Up</Button>
          </a>
        </Link>
      </nav>
    </Container>
  )
}
