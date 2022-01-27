import { getPlaces } from "../clients/apollo"
import Button from "../components/button"
import Card from "../components/card"
import Input from "../components/input"
import DayPicker from "../components/dayPicker"
import "react-day-picker/lib/style.css"

import { Container, Aside, Grid } from "../styles/pages/search"

import type { Place } from "./"

interface SearchProps {
  places: Place[]
}

export default function Search({ places }: SearchProps) {
  return (
    <Container>
      <p>{places.length} places await...</p>
      <div>
        <Aside>
          <span>Where</span>
          <Input label={false} icon="search" name="search" />
          <span>When</span>
          <DayPicker />
          <span>How many</span>
          <span>What</span>
          <Button type="black">Clear all</Button>
        </Aside>
        <Grid>
          {places.map(place => (
            <Card key={place.id} place={place} />
          ))}
        </Grid>
      </div>
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
