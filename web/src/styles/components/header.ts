import { styled } from "../../../stitches.config"

export const Container = styled("header", {
  position: "fixed",
  top: 25,
  left: "50%",
  transform: "translateX(-50%)",
  width: 1120,
  height: 84,
  borderRadius: 20,
  paddingInline: 18,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$white",
  boxShadow: "$black",
  zIndex: 10,

  "> span": {
    marginLeft: "24px !important"
  },

  nav: {
    display: "flex",
    alignItems: "center",
    a: {
      paddingTop: 10,
      "&:last-child": {
        paddingTop: 0,
        marginRight: 40,
        height: 48,
        button: {
          paddingTop: 0,
          paddingInline: 20,
          height: 48,
          borderRadius: 15
        }
      }
    }
  }
})

export const Tab = styled("a", {
  position: "relative",
  color: "$black",
  marginRight: 45,
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
