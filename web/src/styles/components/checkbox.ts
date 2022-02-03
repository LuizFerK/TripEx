import { styled } from "../../../stitches.config"
import * as RadixCheckbox from "@radix-ui/react-checkbox"

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: 8
})

export const Box = styled(RadixCheckbox.Root, {
  all: "unset",
  backgroundColor: "$background",
  width: 25,
  height: 20,
  paddingTop: 5,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 10px $black",
  cursor: "pointer",

  variants: {
    type: {
      selected: {
        backgroundColor: "$blue",
        svg: {
          color: "$white"
        }
      },
      default: {
        "&:hover": { backgroundColor: "$lightBlue" },
        "&:focus": { boxShadow: "0 0 0 2px $black", outline: "2px solid $blue" }
      }
    }
  }
})

export const Indicator = styled(RadixCheckbox.Indicator, {
  color: "$black"
})

export const Label = styled("label", {
  color: "$black",
  fontSize: "$1",
  lineHeight: 1,
  userSelect: "none",
  paddingLeft: 15,
  cursor: "pointer"
})
