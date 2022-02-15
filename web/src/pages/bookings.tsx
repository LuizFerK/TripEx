import { GetServerSidePropsContext } from "next"
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
import { differenceInDays } from "date-fns"
import getBookings from "../clients/apollo/queries/bookings"

import Button from "../components/button"

import upperCaseFirstLetter from "../utils/upperCaseFirstLetter"

import { Place } from "../pages"

import { Container, Card, Box, Empty } from "../styles/pages/bookings"

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
      {bookings.length === 0 ? (
        <Empty>
          <strong>You have no bookings for now.</strong>
          <p>
            Go ahead and{" "}
            <Link href="/search">
              <a>book now</a>
            </Link>{" "}
            an amazing place!
          </p>
        </Empty>
      ) : (
        bookings.map(booking => (
          <Card key={booking.id}>
            <div>
              <Image
                unoptimized
                width={500}
                height={500}
                src={booking.place.image}
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
                  </Button>
                )}
              </div>
            </div>
            <div>
              <Box>
                <EnterIcon />
                <p>{booking.startDate.replaceAll("-", "/")}</p>
              </Box>
              <Box>
                <ExitIcon />
                <p>{booking.endDate.replaceAll("-", "/")}</p>
              </Box>
              <Box
                type={booking.state === "reserved" ? "reserved" : "canceled"}
              >
                {booking.state === "reserved" ? <CheckIcon /> : <Cross2Icon />}
                <p>{upperCaseFirstLetter(booking.state)}</p>
              </Box>
              <Box>
                <CalendarIcon />
                <p>
                  {differenceInDays(
                    new Date(booking.endDate),
                    new Date(booking.startDate)
                  )}{" "}
                  nights
                </p>
              </Box>
            </div>
          </Card>
        ))
      )}
    </Container>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies["TripEx_token"]

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  const bookings = await getBookings(token)

  return {
    props: {
      bookings
    }
  }
}
