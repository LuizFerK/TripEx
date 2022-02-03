import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { getPlaceBySlug, getPlacesSlugs } from "../../clients/apollo"
import {
  PersonIcon,
  Cross2Icon,
  CheckIcon,
  ChevronLeftIcon
} from "@radix-ui/react-icons"

import Page404 from "../404"
import DayPicker from "../../components/dayPicker"

import timeFromNow from "../../utils/timeFromNow"

import { Place as PlaceType } from ".."
import Button from "../../components/button"

import {
  Container,
  Badge,
  Details,
  Picker,
  Reviews
} from "../../styles/pages/place"

interface QueryProps {
  params: {
    slug: string
  }
}

interface PlaceProps {
  place: PlaceType
  error: boolean
}

export default function Place({ place, error }: PlaceProps) {
  const { back } = useRouter()

  return error ? (
    <Page404 />
  ) : (
    <Container>
      <button onClick={back}>
        <ChevronLeftIcon />
      </button>
      <h1>{place.name}</h1>
      <Badge>{place.location}</Badge>
      <Details>
        <Image
          unoptimized
          width={500}
          height={500}
          src={place.image}
          alt={place.name}
        />
        <aside>
          <div>
            <p>{place.description}</p>
            <div>
              <PersonIcon />
              <p>Sleeps {place.maxGuests}</p>
            </div>
          </div>
          <div>
            {[
              { name: "Wifi", bool: place.wifi },
              { name: "Pool", bool: place.pool },
              { name: "Pet-Friendly", bool: place.petFriendly }
            ].map(({ name, bool }) => (
              <div key={name}>
                {bool ? <CheckIcon /> : <Cross2Icon />}
                <span>{name}</span>
              </div>
            ))}
          </div>
          <strong>
            ${new Intl.NumberFormat().format(Number(place.pricePerNight))}/night
          </strong>
        </aside>
      </Details>
      <Picker>
        <DayPicker quantity={3} />
        <Link href="/signin">
          <a>
            <Button>Sign in to book dates!</Button>
          </a>
        </Link>
      </Picker>
      <Reviews>
        <h2>Reviews</h2>
        {place.reviews.length === 0 ? (
          <div>
            <div>
              <strong>Unfortunately, this place has no reviews. :(</strong>
            </div>
            <p>Go ahead and be the first one to review it!</p>
          </div>
        ) : (
          place.reviews.map(review => (
            <div key={review.id}>
              <div>
                <strong>{review.user.username}</strong>
                <span>{timeFromNow(review.insertedAt)}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        )}
        <Link href="/signin">
          <a>
            <Button>Sign in to post a review!</Button>
          </a>
        </Link>
      </Reviews>
    </Container>
  )
}

export async function getStaticProps({ params }: QueryProps) {
  const place: PlaceType | null = await getPlaceBySlug(params.slug).catch(
    () => null
  )

  return {
    props: {
      place,
      error: !place
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const places = await getPlacesSlugs()

  return {
    paths: places.map(place => ({
      params: { slug: place.slug }
    })),
    fallback: "blocking"
  }
}
