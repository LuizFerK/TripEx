import { useState } from "react"
import Picker, { DateUtils, RangeModifier } from "react-day-picker"
import "react-day-picker/lib/style.css"

import { Container } from "../styles/components/dayPicker"

interface DayPickerProps {
  quantity?: number
}

export default function DayPicker({ quantity = 1 }: DayPickerProps) {
  const [range, setRange] = useState<RangeModifier>({} as RangeModifier)

  const handleDayClick = (day: Date) => {
    const newRange = DateUtils.addDayToRange(day, range)
    setRange(newRange)
  }

  return (
    <Container quantity={quantity > 1 ? "multiple" : "unique"}>
      <Picker
        numberOfMonths={quantity}
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
