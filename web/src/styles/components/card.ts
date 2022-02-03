import { styled } from "../../../stitches.config"

const cardSize = "22vw"
const cardSizeBp4 = "28vw"

export const Container = styled("div", {
  width: "100%",
  borderRadius: 12,
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

  "@bp5": {
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
  maxHeight: 390,
  padding: "19px 15px 15px",
  transition: "0.2s",
  h1: {
    color: "$white",
    fontSize: "$2",
    lineHeight: 0.7
  },
  "div:last-child": {
    p: {
      color: "$white",
      marginBottom: 8,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 0.7
    }
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    a: {
      height: 32,
      display: "flex",

      button: {
        paddingTop: 2,
        paddingInline: 10,
        height: 32,
        fontSize: 24,
        borderRadius: 8
      }
    }
  },

  "@bp5": {
    height: cardSizeBp4
  }
})

export const Badge = styled("p", {
  background: "$blueLinear",
  width: "fit-content",
  height: 22,
  fontSize: 18,
  fontWeight: 300,
  paddingInline: 10,
  paddingBlock: 0,
  borderRadius: 8,
  color: "$white"
})

export const Sleeps = styled("div", {
  backgroundColor: "$white",
  paddingInline: 10,
  height: 32,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  strong: {
    color: "$black",
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 4,
    marginLeft: 5
  },
  svg: {
    color: "$black",
    width: 14,
    height: 14,
    strokeWidth: 0.4,
    stroke: "$black"
  }
})
