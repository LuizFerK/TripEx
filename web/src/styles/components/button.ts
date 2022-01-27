import { styled } from "../../../stitches.config"

export const Container = styled("button", {
  all: "unset",
  alignItems: "center",
  borderRadius: 4,
  fontSize: 15,
  height: 35,
  color: "$white",
  cursor: "pointer",
  transition: "0.2s",

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
      blue: {
        width: "100%",
        textAlign: "center",
        backgroundColor: "$secondary",
        "&:hover": {
          backgroundColor: "$secondaryDark"
        }
      }
    }
  }
})
