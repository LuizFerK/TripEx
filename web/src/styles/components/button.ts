import { styled } from "../../../stitches.config"

export const Container = styled("button", {
  all: "unset",
  alignItems: "center",
  borderRadius: 20,
  fontSize: "$2",
  height: 77,
  paddingTop: 4,
  color: "$white",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": { transform: "scale(1.04)" },

  variants: {
    type: {
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
        border: "1px solid $primary",
        color: "$primary",
        textAlign: "center",
        width: "fit-content",
        paddingInline: 15,
        "&:hover": {
          backgroundColor: "$primary",
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
      }
    }
  }
})
