import { styled } from "../../../stitches.config"
import * as RadixCheckbox from "@radix-ui/react-checkbox"

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: 8
})

export const Box = styled(RadixCheckbox.Root, {
  all: "unset",
  backgroundColor: "$grayLight",
  width: 25,
  height: 25,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 10px $black",
  cursor: "pointer",
  "&:hover": { backgroundColor: "$gray" },
  "&:focus": { boxShadow: "0 0 0 2px $black", outline: "2px solid $secondary" }
})

export const Indicator = styled(RadixCheckbox.Indicator, {
  color: "$secondary"
})

export const Label = styled("label", {
  color: "$black",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
  paddingLeft: 15,
  cursor: "pointer"
})
