import Picker, { DateUtils, RangeModifier } from "react-day-picker"
import "react-day-picker/lib/style.css"

import { Container } from "../styles/components/dayPicker"

interface DayPickerProps {
  quantity?: number
  value: RangeModifier | undefined
  onChange: (range: RangeModifier) => void
}

export default function DayPicker({
  quantity = 1,
  value,
  onChange
}: DayPickerProps) {
  const handleDayClick = (day: Date) => {
    const newRange = DateUtils.addDayToRange(day, {
      from: value?.from || undefined,
      to: value?.to || undefined
    })
    onChange(newRange)
  }

  return (
    <Container quantity={quantity > 1 ? "multiple" : "unique"}>
      <Picker
        numberOfMonths={quantity}
        className="Selectable"
        selectedDays={[value?.from || undefined, value]}
        modifiers={{
          start: value?.from || undefined,
          end: value?.to || undefined
        }}
        onDayClick={handleDayClick}
      />
    </Container>
  )
}
