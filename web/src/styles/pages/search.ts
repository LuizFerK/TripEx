import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  padding: "5px 0 30px",
  textAlign: "center",
  p: {
    marginBottom: 5
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
  backgroundColor: "$white",
  height: "min-content",
  padding: "10px 20px 20px",
  borderRadius: 20,
  width: 340,

  "> span": {
    textTransform: "uppercase",
    marginBottom: -5,
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
