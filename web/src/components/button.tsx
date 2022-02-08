import React, { ButtonHTMLAttributes, ReactNode } from "react"

import { Container } from "../styles/components/button"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "white" | "black" | "blue" | "red"
  children: ReactNode
}

export default function Button({ color, children, ...rest }: ButtonProps) {
  return (
    <Container color={color || "blue"} {...rest}>
      {children}
    </Container>
  )
}
