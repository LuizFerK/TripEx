import { styled } from "../../../stitches.config"

export const Container = styled("button", {
  all: "unset",
  alignItems: "center",
  borderRadius: 15,
  fontSize: "$2",
  height: 56,
  paddingTop: 4,
  color: "$white",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": { transform: "scale(1.04)" },

  variants: {
    color: {
      white: {
        display: "inline-flex",
        padding: "0 15px",
        border: "1px solid $white",
        "&:hover": {
          backgroundColor: "$white",
          color: "$black"
        }
      },
      black: {
        backgroundColor: "$blue",
        color: "$white",
        fontSize: "$1",
        paddingInline: 15,
        height: 33,
        paddingBottom: 10,
        "&:hover": {
          backgroundColor: "$blue",
          color: "$white"
        }
      },
      blue: {
        width: "100%",
        textAlign: "center",
        background: "$blueLinear",
        boxShadow: "$blue",
        "&:hover": {
          background: "$blueLinear"
        }
      },
      red: {
        width: "100%",
        textAlign: "center",
        fontWeight: 300,
        color: "$gray",
        outline: "1px solid $gray",

        "&:hover": {
          background: "$red",
          outline: "none",
          color: "$white"
        }
      }
    }
  }
})
