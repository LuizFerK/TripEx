import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  placeItems: "center",
  marginInline: "16%",
  paddingTop: 50,
  gap: 10
})
