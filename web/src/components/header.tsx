import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import Button from "./button"
import Dropdown from "./dropdown"

import { Container, Tab } from "../styles/components/header"

export default function Header() {
  const { pathname } = useRouter()

  return (
    <Container>
      <Link passHref href="/">
        <a>
          <Image
            width={140}
            height={48}
            src="/logo.png"
            alt="TripEx logo"
            priority
          />
        </a>
      </Link>
      <nav>
        <Link passHref href="/search">
          <Tab type={pathname === "/search" ? "selected" : "unselected"}>
            Search
          </Tab>
        </Link>
        <Link passHref href="/signin">
          <Tab type={pathname === "/signin" ? "selected" : "unselected"}>
            Sign In
          </Tab>
        </Link>
        <Link passHref href="/signup">
          <a>
            <Button>Sign Up</Button>
          </a>
        </Link>
      </nav>
      <Dropdown />
    </Container>
  )
}
