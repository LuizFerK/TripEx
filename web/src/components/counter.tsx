import { useState } from "react"
import { MinusIcon, PlusIcon, PersonIcon } from "@radix-ui/react-icons"

import { Container, Button } from "../styles/components/counter"

interface CounterProps {
  value: number | undefined
  onChange: (guests: number) => void
}

export default function Counter({ value, onChange }: CounterProps) {
  return (
    <Container>
      <Button
        disabled={(value || 2) <= 1}
        cursor={(value || 2) <= 1 ? "disabled" : "enable"}
        onClick={() => onChange((value || 2) - 1)}
      >
        <MinusIcon />
      </Button>
      <div>
        <PersonIcon />
        {value && <span>{value}</span>}
      </div>
      <Button
        disabled={(value || 2) >= 10}
        cursor={(value || 2) >= 10 ? "disabled" : "enable"}
        onClick={() => onChange((value || 2) + 1)}
      >
        <PlusIcon />
      </Button>
    </Container>
  )
}
