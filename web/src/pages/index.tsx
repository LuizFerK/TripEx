import getPlaces from "../clients/apollo/queries/places"
import Card from "../components/card"

import { Container } from "../styles/pages"

interface User {
  username: string
}

interface Review {
  id: string
  user: User
  insertedAt: string
  rating: number
  comment: string
}

export interface Place {
  id: string
  name: string
  image: string
  location: string
  description: string
  maxGuests: number
  slug: string
  wifi: boolean
  pool: boolean
  petFriendly: boolean
  pricePerNight: string
  reviews: Review[]
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
