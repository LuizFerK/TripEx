import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$background",
  marginBottom: 15,
  borderRadius: 10,
  height: 35,

  div: {
    display: "inline-flex",
    alignItems: "center",

    span: {
      fontSize: "$1",
      margin: "unset",
      paddingTop: 3.2
    },

    svg: {
      strokeWidth: 0.8,
      stroke: "$black",
      marginRight: 4
    }
  }
})

export const Button = styled("button", {
  backgroundColor: "$blue",
  width: 35,
  height: 35,
  borderRadius: 10,
  border: "none",
  margin: 0,
  transition: "0.2s",

  svg: {
    color: "$white",
    width: 17,
    height: 17,
    marginTop: 3
  },

  "&:hover": {
    backgroundColor: "$blue",
    transform: "scale(1.1)"
  },

  variants: {
    cursor: {
      disabled: {
        cursor: "not-allowed"
      },
      enable: {
        cursor: "pointer"
      }
    }
  }
})
