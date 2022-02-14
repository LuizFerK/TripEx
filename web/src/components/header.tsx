import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "../hooks/auth"
import Button from "./button"
import Dropdown from "./dropdown"

import { Container, Tab } from "../styles/components/header"

export default function Header() {
  const { pathname } = useRouter()
  const { user, signOut } = useAuth()

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
        {user ? (
          <>
            <Link passHref href="/">
              <Tab type="unselected" onClick={signOut}>
                Sign Out
              </Tab>
            </Link>
            <Link passHref href="/bookings">
              <a>
                <Button>My Bookings</Button>
              </a>
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
      <Dropdown />
    </Container>
  )
}
