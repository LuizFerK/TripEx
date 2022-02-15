import { gql } from "@apollo/client"
import client from "../../apollo"

import { Place } from "../../../pages"

interface PlaceQuery {
  place: Place
}

export default async function getPlaceBySlug(slug: string) {
  const { data } = await client().query<PlaceQuery>({
    query: gql`
      query Place {
        place(slug: "${slug}") {
          id
          name
          location
          image
          description
          maxGuests
          wifi
          pool
          petFriendly
          pricePerNight
          reviews {
						id
						user {
							username
						}
						insertedAt
						rating
						comment
					}
        }
      }
    `
  })

  return data.place
}
