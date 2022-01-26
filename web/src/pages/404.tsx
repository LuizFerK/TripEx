import Link from "next/link"
import { styled } from "../../stitches.config"

const Container = styled("div", {
  display: "grid",
  placeItems: "center",
  height: "calc(100vh - 85px)",
  textAlign: "center",
  h1: {
    marginBottom: 15
  },
  a: {
    color: "$secondary"
  }
})

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
