import { styled, keyframes } from "@stitches/react"
import {
  Root as DropdownRoot,
  Content as DropdownContent,
  Item as DropdownItem
} from "@radix-ui/react-dropdown-menu"

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(10px)" }
})

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(10px)" }
})

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(10px)" }
})

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(10px)" }
})

export const ButtonIcon = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 48,
  width: 48,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primary",
  backgroundColor: "$background",
  boxShadow: "0 2px 10px $black",
  cursor: "pointer",
  svg: {
    height: 18,
    width: 18
  },
  "&:hover": { outline: "2px solid $primary" },
  "&:focus": { outline: "2px solid $primary" }
})

export const Content = styled(DropdownContent, {
  minWidth: 180,
  backgroundColor: "$white",
  transform: "translateY(10px) !important",
  display: "block",
  borderRadius: 12,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },
  "@media(min-width: 640px)": {
    display: "none"
  },
  "&::before": {
    content: "",
    position: "absolute",
    right: "5.5%",
    top: "-16px",
    border: "solid 8px transparent",
    borderBottomColor: "$white"
  }
})

export const Item = styled(DropdownItem, {
  all: "unset",
  fontSize: "$1",
  color: "$primary",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  height: 50,
  paddingTop: 4,
  position: "relative",
  paddingLeft: 15,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$black",
    pointerEvents: "none"
  },

  "&:focus": {
    backgroundColor: "$primary",
    color: "$white"
  }
})

export const ItemIcon = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primary",
  backgroundColor: "$background",
  boxShadow: "0 2px 10px $black",
  marginRight: 10,
  marginBottom: 4,

  svg: {
    width: 18,
    height: 18
  },
  "&:hover": { backgroundColor: "$primary" },
  "&:focus": { boxShadow: "0 0 0 2px black" }
})
