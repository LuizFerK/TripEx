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
