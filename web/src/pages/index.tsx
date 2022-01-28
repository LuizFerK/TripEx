import { getPlaces } from "../clients/apollo"
import Card from "../components/card"

import { Container } from "../styles/pages"

export interface Place {
  id: string
  name: string
  image: string
  location: string
  description: string
  maxGuests: number
  slug: string
}

interface HomeProps {
  places: Place[]
}

export default function Home({ places }: HomeProps) {
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
