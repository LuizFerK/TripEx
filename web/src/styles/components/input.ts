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
  fontSize: "$2",
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
  borderRadius: 20,
  paddingInline: 28,
  paddingTop: 4,
  height: 76,
  fontSize: "$2",
  color: "$black",
  backgroundColor: "$white",
  "&:focus": { outline: "2px solid $primary" },

  variants: {
    variant: {
      withIcon: {
        paddingLeft: 35
      }
    }
  }
})
