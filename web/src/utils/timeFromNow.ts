import { formatDistanceToNow } from "date-fns"

export default function timeFromNow(date: string) {
  return formatDistanceToNow(new Date(date)) + " ago"
}
