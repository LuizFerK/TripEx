import Image from "next/image"
import { useRouter } from "next/router"
import { getPlaceBySlug, getPlacesSlugs } from "../../clients/apollo"
import { PersonIcon, Cross2Icon, CheckIcon } from "@radix-ui/react-icons"
import DayPicker from "../../components/dayPicker"
import Page404 from "../404"

import { Place as PlaceType } from ".."
import Button from "../../components/button"

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
    <div>
      <button onClick={back}>return</button>
      <h1>{place.name}</h1>
      <h2>{place.location}</h2>
      <section>
        <Image
          loader={() => place.image}
          width={500}
          height={500}
          src={place.image}
          alt={place.name}
        />
        <aside>
          <p>{place.description}</p>
          <div>
            <PersonIcon />
            <span>Sleeps {place.maxGuests}</span>
          </div>
          <div>
            {[
              { name: "Wifi", bool: place.wifi },
              { name: "Pool", bool: place.pool },
              { name: "Pet-Friendly", bool: place.petFriendly }
            ].map(({ name, bool }) => (
              <div key={name}>
                {bool ? <Cross2Icon /> : <CheckIcon />}
                <span>{name}</span>
              </div>
            ))}
          </div>
          <strong>${place.pricePerNight}/night</strong>
        </aside>
      </section>
      <section>
        <DayPicker />
        <Button>Sign in to book dates!</Button>
      </section>
    </div>
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
