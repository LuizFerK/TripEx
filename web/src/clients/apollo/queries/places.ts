import { gql } from "@apollo/client"
import client from "../../apollo"

import { Place } from "../../../pages"

interface PlacesQuery {
  places: Place[]
}

interface StringDateRange {
  endDate: string
  startDate: string
}

export interface PlacesFilters {
  wifi?: boolean
  pool?: boolean
  petFriendly?: boolean
  matching?: string
  guestCount?: number
  availableBetween?: StringDateRange
}

export default async function getPlaces(filters: PlacesFilters = {}) {
  const parsedFilters = JSON.stringify(filters).replace(/"([^"]+)":/g, "$1:")
  const { data } = await client().query<PlacesQuery>({
    query: gql`
      query Places {
        places(filter: ${parsedFilters}) {
          id
          name
          location
          description
          maxGuests
          image
          slug
        }
      }
    `
  })

  return data.places
}
