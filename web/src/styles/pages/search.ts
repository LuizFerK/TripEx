import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  paddingBlock: 30,
  textAlign: "center",
  p: {
    marginBottom: 20
  },

  "> div": {
    textAlign: "start",
    display: "flex",
    width: "95%",
    margin: "auto",
    justifyContent: "center",
    "@bp4": {
      width: "80%"
    }
  }
})

export const Aside = styled("aside", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$grayLight",
  height: "min-content",
  padding: 20,
  borderRadius: 8,

  "> span": {
    textTransform: "uppercase",
    marginBottom: 8,
    marginLeft: 2
  },

  "> button": {
    margin: "auto"
  }
})

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  placeItems: "center",
  gap: 12,
  width: "65%",
  marginLeft: "3%",
  maxWidth: 1000,
  "@bp3": {
    gridTemplateColumns: "repeat(3, 1fr)"
  }
})
