import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  placeItems: "center",
  paddingTop: 50,
  gap: 12,
  width: "65%",
  margin: "auto",
  maxWidth: 1000
})
