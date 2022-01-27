import { useState } from "react"
import { MinusIcon, PlusIcon, PersonIcon } from "@radix-ui/react-icons"

import { Container, Button } from "../styles/components/counter"

export default function Counter() {
  const [counter, setCounter] = useState(2)

  const handleCounterDown = () => {
    counter > 1 && setCounter(counter - 1)
  }

  const handleCounterUp = () => {
    counter < 10 && setCounter(counter + 1)
  }

  return (
    <Container>
      <Button
        disabled={counter <= 1}
        cursor={counter <= 1 ? "disabled" : "enable"}
        onClick={handleCounterDown}
      >
        <MinusIcon />
      </Button>
      <div>
        <PersonIcon />
        <span>{counter}</span>
      </div>
      <Button
        disabled={counter >= 10}
        cursor={counter >= 10 ? "disabled" : "enable"}
        onClick={handleCounterUp}
      >
        <PlusIcon />
      </Button>
    </Container>
  )
}
