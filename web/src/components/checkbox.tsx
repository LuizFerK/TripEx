import { useState } from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { CheckedState } from "@radix-ui/react-checkbox"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import { Container, Box, Indicator, Label } from "../styles/components/checkbox"

interface CheckboxProps {
  name: string
}

export default function Checkbox({ name }: CheckboxProps) {
  const [checked, setChecked] = useState<CheckedState | undefined>(undefined)

  return (
    <Container>
      <Box
        id={name}
        checked={checked}
        onCheckedChange={setChecked}
        type={checked ? "selected" : "default"}
      >
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Box>
      <Label htmlFor={name}>{upperCaseFirstLetter(name)}</Label>
    </Container>
  )
}
