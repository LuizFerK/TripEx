import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "grid",
  placeItems: "center",
  height: "calc(100vh - 85px)",
  textAlign: "center",
  h1: {
    marginBottom: 15
  },
  a: {
    color: "$blue"
  }
})
