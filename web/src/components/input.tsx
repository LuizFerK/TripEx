import { InputHTMLAttributes } from "react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import {
  Container,
  IconContainer,
  Label,
  TextInput
} from "../styles/components/input"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: "search"
  type?: "text" | "email" | "password"
  placeholder?: string
  label?: boolean
}

export default function Input({
  name,
  icon,
  type,
  placeholder,
  label = true,
  ...rest
}: InputProps) {
  return (
    <Container>
      <IconContainer>
        {icon === "search" && <MagnifyingGlassIcon />}
      </IconContainer>
      {label && <Label htmlFor={name}>{upperCaseFirstLetter(name)}</Label>}
      <TextInput
        placeholder={placeholder}
        id={name}
        type={type || "text"}
        variant={icon && "withIcon"}
        {...rest}
      />
    </Container>
  )
}
