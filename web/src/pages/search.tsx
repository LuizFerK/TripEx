import { getPlaces } from "../clients/apollo"
import Button from "../components/button"
import Card from "../components/card"
import Input from "../components/input"
import Counter from "../components/counter"
import DayPicker from "../components/dayPicker"
import Checkbox from "../components/checkbox"

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
          <Counter />
          <span>What</span>
          <Checkbox name="pet friendly" />
          <Checkbox name="pool" />
          <Checkbox name="wifi" />
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
