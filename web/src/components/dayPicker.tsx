import { useState } from "react"
import Picker, { DateUtils, RangeModifier } from "react-day-picker"

import { Container } from "../styles/components/dayPicker"

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
