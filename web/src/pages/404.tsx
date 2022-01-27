import Link from "next/link"
import { Container } from "../styles/pages/404"

export default function NotFound() {
  return (
    <Container>
      <div>
        <h1>Oops...</h1>
        <p>
          Looks like there nothing out here. Let&apos;s get back to the{" "}
          <Link href="/">
            <a>homepage</a>
          </Link>
          !
        </p>
      </div>
    </Container>
  )
}
