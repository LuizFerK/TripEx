import { styled } from "../../../stitches.config"

export const Container = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
})

export const IconContainer = styled("div", {
  position: "absolute",
  width: 50,
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
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  padding: "4px 28px 0",
  height: 56,
  fontSize: "$2",
  color: "$black",
  width: "100%",
  backgroundColor: "$white",
  "&:focus": { outline: "2px solid $blue" },

  variants: {
    variant: {
      withIcon: {
        paddingLeft: 50,
        paddingRight: 10,
        backgroundColor: "$background"
      }
    }
  }
})
