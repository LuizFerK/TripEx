// import { gql } from "@apollo/client"
// import client from "../clients/apollo"

interface Place {
  id: number
  name: string
}

interface HomeProps {
  places: Place[]
}

const Home = ({ places }: HomeProps) => {
  return (
    <>
      <h1>Home</h1>
      {places.map(place => (
        <p key={place.id}>{place.name}</p>
      ))}
    </>
  )
}

export async function getStaticProps() {
  // const { data } = await client.query<HomeProps>({
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

export default Home
