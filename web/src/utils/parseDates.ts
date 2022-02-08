import { format } from "date-fns"
import { RangeModifier } from "react-day-picker"

export default function parseDates(dates: RangeModifier | undefined) {
  if (!dates || !dates.from || !dates.to) {
    return undefined
  }

  return Object.keys(JSON.parse(JSON.stringify(dates))).length === 2
    ? {
        startDate: format(dates.from, "yyyy-MM-dd"),
        endDate: format(dates.to, "yyyy-MM-dd")
      }
    : undefined
}
