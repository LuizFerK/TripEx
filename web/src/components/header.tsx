import Link from "next/link"
import {
  Container,
  Title,
  Tab,
  Button,
  Margin
} from "../styles/components/header"

export default function Header() {
  return (
    <>
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
            <Button as="a">Sign Up</Button>
          </Link>
        </nav>
      </Container>
      <Margin />
    </>
  )
}
