import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$grayLight",
  marginBottom: 15,
  borderRadius: 4,

  div: {
    display: "inline-flex",
    alignItems: "center",

    span: {
      margin: "unset"
    },

    svg: {
      strokeWidth: 0.25,
      stroke: "$black",
      marginRight: 4
    }
  }
})

export const Button = styled("button", {
  backgroundColor: "$secondary",
  width: 35,
  height: 35,
  borderRadius: 4,
  border: "none",
  margin: 0,

  svg: {
    color: "$white",
    width: 17,
    height: 17
  },

  "&:hover": {
    backgroundColor: "$secondaryDark"
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
