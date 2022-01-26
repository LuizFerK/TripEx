// import { gql } from "@apollo/client"
// import client from "../clients/apollo"

import type { Place } from "./"

interface SearchProps {
  places: Place[]
}

export default function Search({ places }: SearchProps) {
  return (
    <>
      <h1>Search</h1>
      {places.map(place => (
        <p key={place.id}>{place.name}</p>
      ))}
    </>
  )
}

export async function getStaticProps() {
  // const { data } = await client.query<SearchProps>({
  //   query: gql`
  //     query Places {
  //       places {
  //         id
  //         name
  //       }
  //     }
  //   `
  // })

  const data = { places: [{ id: 0, name: "place" }] }

  return {
    props: {
      places: data.places
    }
  }
}
