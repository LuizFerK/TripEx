import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

import { Place } from "../pages"

interface PlacesQuery {
  places: Place[]
}

interface PlaceQuery {
  place: Place
}

interface AuthMutation {
  user: {
    username: string
  }
  token: string
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

export const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/api",
  cache: new InMemoryCache()
})

export async function getPlaces(filters: PlacesFilters = {}) {
  const parsedFilters = JSON.stringify(filters).replace(/"([^"]+)":/g, "$1:")
  const { data } = await client.query<PlacesQuery>({
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

export async function authenticate(username: string, password: string) {
  const { data } = await client.mutate<AuthMutation>({
    mutation: gql`
      mutation Authenticate {
        signin(username: "${username}", password: "${password}") {
          user {
            username
          }
          token
        }
      }
    `
  })

  return data
}
