import Link from "next/link"
import {
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  EnterIcon,
  PersonIcon
} from "@radix-ui/react-icons"
import { Root, Trigger } from "@radix-ui/react-dropdown-menu"

import {
  ButtonIcon,
  Content,
  Item,
  ItemIcon
} from "../styles/components/dropdown"

export default function Dropdow() {
  return (
    <Root>
      <Trigger asChild>
        <ButtonIcon aria-label="Navigate">
          <HamburgerMenuIcon />
        </ButtonIcon>
      </Trigger>
      <Content sideOffset={5}>
        <Link href="/search">
          <a>
            <Item>
              <ItemIcon>
                <MagnifyingGlassIcon />
              </ItemIcon>
              Search
            </Item>
          </a>
        </Link>
        <Link href="/signin">
          <a>
            <Item>
              <ItemIcon>
                <EnterIcon />
              </ItemIcon>
              Sign In
            </Item>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <Item>
              <ItemIcon>
                <PersonIcon />
              </ItemIcon>
              Sign Up
            </Item>
          </a>
        </Link>
      </Content>
    </Root>
  )
}
