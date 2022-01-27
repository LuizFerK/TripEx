import { styled } from "../../../stitches.config"

const cardSize = "22vw"
const cardSizeBp4 = "28vw"

export const Container = styled("div", {
  width: "100%",
  borderRadius: 8,
  overflow: "hidden",
  position: "relative",
  transition: "0.2s",
  height: cardSize,
  maxHeight: 390,

  img: {
    objectFit: "cover"
  },

  "&:hover": {
    transform: "scale(1.1)",
    zIndex: 1,

    img: {
      filter: "brightness(0.5)"
    },

    div: {
      opacity: 1
    }
  },

  "@bp4": {
    height: cardSizeBp4
  }
})

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  opacity: 0,
  position: "absolute",
  width: "100%",
  height: cardSize,
  padding: 15,
  transition: "0.2s",
  span: {
    color: "$white",
    fontSize: 24,
    fontWeight: 700
  },
  p: {
    color: "$white",
    marginBottom: 10
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  "@bp4": {
    height: cardSizeBp4
  }
})

export const Badge = styled("p", {
  background: "$blueLinear",
  width: "fit-content",
  paddingInline: 15,
  paddingBlock: 1,
  borderRadius: 5,
  marginTop: 4,
  fontSize: 14,
  color: "$white"
})

export const Sleeps = styled("div", {
  backgroundColor: "$white",
  paddingInline: 10,
  height: 37,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  strong: {
    color: "$black",
    fontSize: 14,
    marginLeft: 5
  },
  svg: {
    color: "$black",
    width: 17,
    height: 17,
    strokeWidth: 0.4,
    stroke: "$black"
  }
})
