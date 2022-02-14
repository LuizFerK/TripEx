import React, { ButtonHTMLAttributes, ReactNode } from "react"

import { Container } from "../styles/components/button"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "white" | "black" | "blue" | "red"
  option?: "disabled" | "default"
  children: ReactNode
}

export default function Button({
  color,
  option,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container color={color || "blue"} option={option || "default"} {...rest}>
      {children}
    </Container>
  )
}
