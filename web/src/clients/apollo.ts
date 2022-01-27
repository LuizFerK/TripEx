import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

import { Place } from "../pages"

interface PlacesQuery {
  places: Place[]
}

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/api",
  cache: new InMemoryCache()
})

export async function getPlaces() {
  const { data } = await client.query<PlacesQuery>({
    query: gql`
      query Places {
        places {
          id
          name
          location
          description
          maxGuests
          image
        }
      }
    `
  })

  return data.places
}
