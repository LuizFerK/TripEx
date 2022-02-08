import Image from "next/image"
import Link from "next/link"
import {
  EnterIcon,
  ExitIcon,
  CheckIcon,
  Cross2Icon,
  CalendarIcon,
  PersonIcon,
  ExternalLinkIcon
} from "@radix-ui/react-icons"
// import { getUserBookings } from "../clients/apollo"

import Button from "../components/button"

import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import { Place } from "../pages"

import { Container, Box } from "../styles/pages/bookings"

interface Booking {
  id: string
  place: Place
  startDate: string
  endDate: string
  state: string
  totalPrice: string
  slug: string
}

interface BookingsProps {
  bookings: Booking[]
}

export default function Bookings({ bookings }: BookingsProps) {
  return (
    <Container>
      <h1>My Bookings</h1>
      {bookings.map(booking => (
        <div key={booking.id}>
          <div>
            <Image
              unoptimized
              width={500}
              height={500}
              // src={booking.place.image}
              src="https://picsum.photos/1200/800"
              alt={booking.place.name}
            />
            <h2>{booking.place.name}</h2>
            <p>{booking.place.location}</p>
            <div>
              <div>
                <PersonIcon />
                <p>Sleeps {booking.place.maxGuests}</p>
              </div>
            </div>
            <div>
              {[
                { name: "Wifi", bool: booking.place.wifi },
                { name: "Pool", bool: booking.place.pool },
                { name: "Pet-Friendly", bool: booking.place.petFriendly }
              ].map(({ name, bool }) => (
                <div key={name}>
                  {bool ? <CheckIcon /> : <Cross2Icon />}
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div>
              <Link href={`/place/${booking.place.slug}`}>
                <a>
                  <Button>
                    <ExternalLinkIcon />
                  </Button>
                </a>
              </Link>
              {booking.state === "reserved" && (
                <Button color="red">
                  <Cross2Icon />
                  <span>Cancel</span>
                </Button>
              )}
            </div>
          </div>
          <div>
            <Box>
              <EnterIcon />
              <p>{booking.startDate}</p>
            </Box>
            <Box>
              <ExitIcon />
              <p>{booking.endDate}</p>
            </Box>
            <Box type={booking.state === "reserved" ? "reserved" : "canceled"}>
              {booking.state === "reserved" ? <CheckIcon /> : <Cross2Icon />}
              <p>{upperCaseFirstLetter(booking.state)}</p>
            </Box>
            <Box>
              <CalendarIcon />
              <p>x nights</p>
            </Box>
          </div>
        </div>
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  // const bookings = await getUserBookings()
  const bookings = [
    {
      id: "1",
      place: {
        name: "Name",
        image: "fodass",
        location: "Canada",
        wifi: true,
        pool: true,
        petFriendly: false,
        maxGuests: 2,
        slug: "sand-castle"
      },
      startDate: "February 4",
      endDate: "February 7",
      state: "reserved",
      totalPrice: "1400.0"
    },
    {
      id: "2",
      place: {
        name: "Name",
        image: "fodass",
        location: "Canada",
        wifi: true,
        pool: true,
        petFriendly: false,
        maxGuests: 2,
        slug: "sand-castle"
      },
      startDate: "February 10",
      endDate: "February 14",
      state: "canceled",
      totalPrice: "1400.0"
    }
  ]

  return {
    props: {
      bookings
    }
  }
}
