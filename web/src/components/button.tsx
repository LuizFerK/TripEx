import { ReactNode } from "react"

import { Container } from "../styles/components/button"

interface ButtonProps {
  type?: "white" | "black" | "blue"
  children: ReactNode
}

export default function Button({ type, children }: ButtonProps) {
  return <Container type={type || "white"}>{children}</Container>
}
