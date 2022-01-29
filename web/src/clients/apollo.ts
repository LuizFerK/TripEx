import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

import { Place } from "../pages"

interface PlacesQuery {
  places: Place[]
}

interface PlaceQuery {
  place: Place
}

export const client = new ApolloClient({
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
          slug
        }
      }
    `
  })

  return data.places
}

export async function getPlacesSlugs() {
  const { data } = await client.query<PlacesQuery>({
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

export async function getPlaceBySlug(slug: string) {
  const { data } = await client.query<PlaceQuery>({
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
        }
      }
    `
  })

  return data.place
}
