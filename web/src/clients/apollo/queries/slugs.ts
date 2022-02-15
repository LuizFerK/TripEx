import { gql } from "@apollo/client"
import client from "../../apollo"

import { Place } from "../../../pages"

interface PlacesQuery {
  places: Place[]
}

export default async function getPlacesSlugs() {
  const { data } = await client().query<PlacesQuery>({
    query: gql`
      query Places {
        places {
          slug
        }
      }
    `
  })

  return data.places
}
