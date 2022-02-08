import { CheckIcon } from "@radix-ui/react-icons"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import { Container, Box, Indicator, Label } from "../styles/components/checkbox"

interface CheckboxProps {
  name: string
  value: boolean | undefined
  onChange: (state: boolean) => void
}

export default function Checkbox({ name, value, onChange }: CheckboxProps) {
  return (
    <Container>
      <Box
        id={name}
        checked={value}
        onCheckedChange={state => onChange(state as boolean)}
        type={value ? "selected" : "default"}
      >
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Box>
      <Label htmlFor={name}>{upperCaseFirstLetter(name)}</Label>
    </Container>
  )
}
