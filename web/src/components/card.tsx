import Image from "next/image"
import Link from "next/link"
import { PersonIcon } from "@radix-ui/react-icons"
import Button from "./button"

import { Container, Content, Badge, Sleeps } from "../styles/components/card"

import { Place } from "../pages"

interface CardProps {
  place: Place
}

export default function Card({ place }: CardProps) {
  return (
    <Container>
      <Image unoptimized layout="fill" src={place.image} alt={place.name} />
      <Content>
        <div>
          <h1>{place.name}</h1>
          <Badge>{place.location}</Badge>
        </div>
        <div>
          <p>{place.description}</p>
          <footer>
            <Sleeps>
              <PersonIcon />
              <strong>{place.maxGuests}</strong>
            </Sleeps>
            <Link passHref href={`/place/${place.slug}`}>
              <a>
                <Button type="blue">Book now</Button>
              </a>
            </Link>
          </footer>
        </div>
      </Content>
    </Container>
  )
}
