import Image from "next/image"
import Link from "next/link"
import Button from "./button"

import { Container, Tab } from "../styles/components/header"

export default function Header() {
  return (
    <Container>
      <Link passHref href="/">
        <Image
          width={140}
          height={48}
          src="/logo.png"
          alt="TripEx logo"
          priority
        />
      </Link>
      <nav>
        <Link passHref href="/search">
          <Tab>Search</Tab>
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
