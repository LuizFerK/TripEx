import Image from "next/image"
import Link from "next/link"

import { PersonIcon } from "@radix-ui/react-icons"

import {
  Container,
  Content,
  Badge,
  Button,
  Sleeps
} from "../styles/components/card"

import { Place } from "../pages"

interface CardProps {
  place: Place
}

export default function Card({ place }: CardProps) {
  return (
    <Container>
      <Image
        loader={() => place.image}
        layout="fill"
        src={place.image}
        alt={place.name}
      />
      <Content>
        <div>
          <span>{place.name}</span>
          <Badge>{place.location}</Badge>
        </div>
        <div>
          <p>{place.description}</p>
          <footer>
            <Sleeps>
              <PersonIcon />
              <strong>{place.maxGuests}</strong>
            </Sleeps>
            <Link passHref href="/signup">
              <Button as="a">Book now</Button>
            </Link>
          </footer>
        </div>
      </Content>
    </Container>
  )
}
