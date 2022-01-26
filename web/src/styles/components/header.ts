import { styled } from "../../../stitches.config"

export const Container = styled("header", {
  backgroundColor: "$primary",
  padding: 24,
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 10
})

export const Title = styled("span", {
  color: "$secondary",
  fontSize: 28,
  cursor: "pointer",
  strong: {
    background: "$blueLinear",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
})

export const Tab = styled("a", {
  position: "relative",
  color: "$white",
  marginRight: 20,
  paddingBottom: 5,

  "&::before": {
    content: "",
    height: 2,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    transform: "scale(0)",
    backgroundColor: "$white",
    transition: "transform 0.2s"
  },
  "&:hover": {
    "&::before": {
      transform: "scale(1)"
    }
  }
})

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  height: 35,
  backgroundColor: "$primary",
  border: "1px solid $white",
  color: "$white",
  cursor: "pointer",
  transition: "0.2s",

  "&:hover": {
    backgroundColor: "$white",
    color: "$black"
  }
})

export const Margin = styled("div", {
  marginBottom: 85
})
