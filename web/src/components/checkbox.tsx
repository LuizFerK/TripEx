import { useState } from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import { Container, Box, Indicator, Label } from "../styles/components/checkbox"

interface CheckboxProps {
  name: string
}

export default function Checkbox({ name }: CheckboxProps) {
  const [checked, setChecked] = useState("indeterminate")

  return (
    <Container>
      <Box id={name}>
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Box>
      <Label htmlFor={name}>{upperCaseFirstLetter(name)}</Label>
    </Container>
  )
}
