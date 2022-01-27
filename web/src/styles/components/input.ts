import { styled } from "../../../stitches.config"

export const Container = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
})

export const IconContainer = styled("div", {
  position: "absolute",
  width: 35,
  height: 35,
  display: "grid",
  placeItems: "center",
  svg: {
    color: "$black",
    width: 17,
    height: 17,
    strokeWidth: 0.4,
    stroke: "$black"
  }
})

export const Label = styled("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: "$black",
  display: "block"
})

export const TextInput = styled("input", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  paddingInline: 10,
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: "$black",
  outline: "1px solid $secondary",
  "&:focus": { outline: "2px solid $secondary" },

  variants: {
    variant: {
      withIcon: {
        paddingLeft: 35
      }
    }
  }
})
