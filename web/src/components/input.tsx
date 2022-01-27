import { Container, Label, TextInput } from "../styles/components/input"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

interface InputProps {
  name: string
  type?: "text" | "email" | "password"
}

export default function Input({ name, type }: InputProps) {
  return (
    <Container>
      <Label htmlFor="name">{upperCaseFirstLetter(name)}</Label>
      <TextInput id="name" type={type || "text"} />
    </Container>
  )
}
