import { styled } from "../../../stitches.config"

export const Container = styled("header", {
  position: "fixed",
  top: 25,
  left: "50%",
  transform: "translateX(-50%)",
  width: "96%",
  height: 84,
  borderRadius: 20,
  paddingInline: 18,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$white",
  boxShadow: "$black",
  zIndex: 10,

  "> a": {
    height: 48
  },
  "> button": {
    display: "inline-flex"
  },

  nav: {
    display: "none",
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
  },

  "@bp4": {
    width: 1120,
    "> a": {
      marginLeft: "24px !important"
    }
  },

  "@bp1": {
    nav: {
      display: "flex"
    },
    "> button": {
      display: "none"
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
    left: "20%",
    right: "20%",
    bottom: 15,
    transform: "scale(0)",
    transition: "transform 0.2s"
  },
  "&:hover": {
    "&::before": {
      transform: "scale(1)"
    }
  },

  variants: {
    type: {
      selected: {
        "&::before": {
          background: "$blueLinear",
          transform: "scale(1)"
        }
      },
      unselected: {
        "&::before": {
          background: "$black"
        }
      }
    }
  }
})
