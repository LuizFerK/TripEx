import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  marginBottom: 15,
  borderRadius: 4,
  display: "inline-block",
  "*": {
    fontSize: "25px"
  },
  ".DayPicker": {
    width: "100%"
  },
  ".DayPicker-wrapper": {
    padding: 0,
    borderRadius: 4,
    position: "relative",
    "&:focus": { outline: "2px solid $blue" }
  },
  ".DayPicker-Month": {
    margin: 0,
    width: "100%",
    display: "grid"
  },
  ".DayPicker-Caption": {
    div: {
      fontSize: "30px !important"
    },
    padding: "0 10px 0",
    marginBottom: -10
  },
  ".DayPicker-NavBar": {
    borderRadius: 4,
    all: "unset",
    display: "flex",
    position: "absolute",
    right: 10,
    top: 8,
    width: 54,
    justifyContent: "space-between",

    span: {
      all: "unset",
      borderRadius: 6,
      overflow: "hidden",
      cursor: "pointer",
      width: 25,
      height: 25,
      display: "grid",
      placeItems: "center",
      color: "$black",

      "&::before": {
        content: "",
        margin: "0.2px 0 0 2px",
        border: "solid $black",
        borderWidth: "0 1px 1px 0",
        display: "inline-block",
        padding: 2.6,
        transform: "rotate(135deg)"
      },
      "&:hover": {
        background: "$blue",
        "&::before": {
          border: "solid $white",
          borderWidth: "0 1px 1px 0"
        }
      },
      "&:focus": {
        outline: "2px solid $blue"
      }
    },
    "&:focus": { outline: "2px solid $blue" }
  },
  ".DayPicker-NavButton--next": {
    "&::before": {
      transform: "rotate(-45deg) !important",
      margin: "0.2px 2px 0 0 !important"
    }
  },
  ".DayPicker-Weekdays": {
    marginTop: 0,
    "> div": {
      width: "100%",
      display: "inline-flex",
      justifyContent: "space-between",
      height: 36
    }
  },
  ".DayPicker-Body": {
    display: "flex",
    flexDirection: "column"
  },
  ".DayPicker-Week": {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    marginBottom: 10
  },
  ".DayPicker-Day": {
    width: 35,
    height: 35,
    padding: 0,
    paddingTop: 1.5,
    borderRadius: 8,
    "&:focus": { outline: "2px solid $blue" }
  },
  ".DayPicker-Day:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)":
    {
      backgroundColor: "$background",
      "&:hover": {
        backgroundColor: "$lightBlue !important"
      }
    },
  ".Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)":
    {
      backgroundColor: "$background",
      color: "$blue"
    },
  ".Selectable .DayPicker-Day--start": {
    backgroundColor: "$blue !important",
    outline: "none"
  },
  ".Selectable .DayPicker-Day--end": {
    background: "$blue !important",
    outline: "none"
  },
  ".Selectable .DayPicker-Day--outside": {
    background: "$white !important"
  },
  ".DayPicker-Day--today": {
    color: "$blue"
  },
  variants: {
    quantity: {
      multiple: {
        ".DayPicker-NavBar": {
          top: 27,
          right: 34
        },
        ".DayPicker-Months": {
          background: "$white",
          padding: "20px 10px",
          borderRadius: 20
        },
        ".DayPicker-Month": {
          width: "fit-content",
          marginInline: 40
        }
      },
      unique: {}
    }
  }
})
