import { gql } from "@apollo/client"
import client from "../../apollo"
import { Place } from "../../../pages"

export interface Booking {
  id: string
  place: Place
  startDate: string
  endDate: string
  state: string
  totalPrice: string
}

interface UserQuery {
  me: {
    bookings: Booking[]
  }
}

export default async function getBookings(token: string) {
  const { data } = await client(token).query<UserQuery>({
    query: gql`
      query Me {
        me {
          bookings {
            id
            place {
              name
              image
              location
              wifi
              pool
              petFriendly
              maxGuests
              slug
            }
            startDate
            endDate
            state
            totalPrice
          }
        }
      }
    `
  })

  return data.me.bookings
}
