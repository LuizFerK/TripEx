import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Picker, { DateUtils, LocaleUtils, RangeModifier } from "react-day-picker"
import "react-day-picker/lib/style.css"

import { Container, NavBarContainer } from "../styles/components/dayPicker"

interface NavBarProps {
  onPreviousClick: () => void
  onNextClick: () => void
  className: string
}

function NavBar({ onPreviousClick, onNextClick, className }: NavBarProps) {
  return (
    <NavBarContainer className={className}>
      <button onClick={() => onPreviousClick()}>
        <ChevronLeftIcon />
      </button>
      <button onClick={() => onNextClick()}>
        <ChevronRightIcon />
      </button>
    </NavBarContainer>
  )
}

export default function DayPicker() {
  const [range, setRange] = useState<RangeModifier>({} as RangeModifier)

  const handleDayClick = (day: Date) => {
    const newRange = DateUtils.addDayToRange(day, range)
    setRange(newRange)
  }

  return (
    <Container>
      <Picker
        className="Selectable"
        selectedDays={[
          range.from as Date | undefined,
          { from: range.from, to: range.to }
        ]}
        modifiers={{
          start: range.from as Date | undefined,
          end: range.to as Date | undefined
        }}
        onDayClick={handleDayClick}
      />
    </Container>
  )
}
