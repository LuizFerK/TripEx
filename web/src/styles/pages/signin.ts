import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "grid",
  placeItems: "center",
  height: "calc(100vh - 150px)"
})

export const Content = styled("div", {
  width: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  a: {
    color: "$secondary"
  },
  form: {
    width: "100%",
    marginTop: 30
  }
})

export const Fieldset = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
})

export const Label = styled("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: "$black",
  display: "block"
})

export const Input = styled("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: "$black",
  border: "1px solid $secondary",
  boxShadow: `0 0 0 1px ${"$secondary"}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${"$secondary"}` }
})
