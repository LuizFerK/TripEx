import { getPlaces } from "../clients/apollo"
import Card from "../components/card"

import { Container } from "../styles/pages/search"

import type { Place } from "./"

interface SearchProps {
  places: Place[]
}

export default function Search({ places }: SearchProps) {
  return (
    <Container>
      {places.map(place => (
        <Card key={place.id} place={place} />
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  const places = await getPlaces()

  return {
    props: {
      places
    }
  }
}
