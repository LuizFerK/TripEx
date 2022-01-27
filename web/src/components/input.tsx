import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import {
  Container,
  IconContainer,
  Label,
  TextInput
} from "../styles/components/input"

interface InputProps {
  name: string
  icon?: "search"
  type?: "text" | "email" | "password"
  label?: boolean
}

export default function Input({ name, icon, type, label = true }: InputProps) {
  return (
    <Container>
      <IconContainer>
        {icon === "search" && <MagnifyingGlassIcon />}
      </IconContainer>
      {label && <Label htmlFor="name">{upperCaseFirstLetter(name)}</Label>}
      <TextInput id="name" type={type || "text"} variant="withIcon" />
    </Container>
  )
}
