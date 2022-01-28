import { useRouter } from "next/router"
import { getPlaceBySlug, getPlacesSlugs } from "../../clients/apollo"
import Page404 from "../404"

import { Place as PlaceType } from ".."

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
