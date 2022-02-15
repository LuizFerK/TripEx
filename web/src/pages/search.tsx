import { useEffect, useState, FormEvent } from "react"
import { RangeModifier } from "react-day-picker"
import getPlaces, { PlacesFilters } from "../clients/apollo/queries/places"
import debounce from "lodash.debounce"
import Button from "../components/button"
import Card from "../components/card"
import Input from "../components/input"
import Counter from "../components/counter"
import DayPicker from "../components/dayPicker"
import Checkbox from "../components/checkbox"
import parseDates from "../utils/parseDates"

import { Container, Aside, Grid } from "../styles/pages/search"

import type { Place } from "./"

interface Filters extends Omit<PlacesFilters, "availableBetween"> {
  availableBetween?: RangeModifier
}

interface SearchProps {
  places: Place[]
}

export default function Search({ places: PlacesQuery }: SearchProps) {
  const [places, setPlaces] = useState(PlacesQuery)
  const [filters, setFilters] = useState({} as Filters)

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) =>
    debounceInput(e.currentTarget.value)

  const debounceInput = debounce(value => {
    setFilters({ ...filters, matching: value })
  }, 500)

  function handleClearFilters() {
    const input = document.getElementById("match_input") as HTMLInputElement
    input.value = ""

    setFilters({
      matching: undefined,
      guestCount: undefined,
      petFriendly: false,
      pool: false,
      wifi: false,
      availableBetween: undefined
    })
  }

  useEffect(() => {
    if (Object.keys(filters).length !== 0) {
      const updatePlaces = async () => {
        const filteredPlaces = await getPlaces({
          ...filters,
          wifi: filters.wifi || undefined,
          pool: filters.pool || undefined,
          petFriendly: filters.petFriendly || undefined,
          availableBetween: parseDates(filters.availableBetween)
        })

        setPlaces(filteredPlaces)
      }

      updatePlaces()
    }
  }, [filters])

  return (
    <Container>
      <p>{places.length} places await...</p>
      <div>
        <Aside>
          <span>Where</span>
          <Input
            id="match_input"
            label={false}
            icon="search"
            name="search"
            onChange={handleChangeInput}
          />
          <span>When</span>
          <DayPicker
            value={filters.availableBetween}
            onChange={range =>
              setFilters({
                ...filters,
                availableBetween: range
              })
            }
          />
          <span>How many</span>
          <Counter
            value={filters.guestCount}
            onChange={guests => setFilters({ ...filters, guestCount: guests })}
          />
          <span>What</span>
          <Checkbox
            name="pet friendly"
            value={filters.petFriendly}
            onChange={state => setFilters({ ...filters, petFriendly: state })}
          />
          <Checkbox
            name="pool"
            value={filters.pool}
            onChange={state => setFilters({ ...filters, pool: state })}
          />
          <Checkbox
            name="wifi"
            value={filters.wifi}
            onChange={state => setFilters({ ...filters, wifi: state })}
          />
          <Button color="black" onClick={handleClearFilters}>
            Clear all
          </Button>
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
