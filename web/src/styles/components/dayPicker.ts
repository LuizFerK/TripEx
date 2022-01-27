import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  marginBottom: 15,
  border: "1px solid $secondary",
  borderRadius: 4,
  ".DayPicker-wrapper": {
    borderRadius: 4,
    "&:focus": { outline: "2px solid $secondary" }
  },
  ".DayPicker-NavButton": {
    borderRadius: 4,
    "&:focus": { outline: "2px solid $secondary" }
  },
  ".DayPicker-Day": {
    "&:focus": { outline: "2px solid $secondary" }
  },
  ".Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)":
    {
      backgroundColor: "$grayLight",
      color: "$secondary"
    },
  ".Selectable .DayPicker-Day": {
    borderRadius: "0 !important"
  },
  ".Selectable .DayPicker-Day--start": {
    backgroundColor: "$secondary !important",
    borderTopLeftRadius: "9px !important",
    borderBottomLeftRadius: "9px !important",
    outline: "none"
  },
  ".Selectable .DayPicker-Day--end": {
    background: "$secondary !important",
    borderTopRightRadius: "9px !important",
    borderBottomRightRadius: "9px !important",
    outline: "none"
  }
})
