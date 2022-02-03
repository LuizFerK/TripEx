import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  width: "90%",
  maxWidth: 1100,
  paddingTop: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  position: "relative",

  "> button": {
    position: "absolute",
    left: 0,
    width: 44,
    height: 44,
    borderRadius: 8,
    border: "none",
    backgroundColor: "$white",
    display: "grid",
    placeItems: "center",
    boxShadow: "$boldBlack",
    transition: "transform 0.2s",

    svg: {
      width: 18,
      height: 18
    },

    "&:hover": {
      transform: "scale(1.1)"
    }
  },

  h1: {
    marginBlock: -20
  }
})

export const Badge = styled("h2", {
  background: "$blueLinear",
  width: "fit-content",
  height: 32,
  fontSize: 26,
  fontWeight: 300,
  paddingInline: 10,
  paddingBlock: 0,
  borderRadius: 8,
  color: "$white",
  marginBottom: 20
})

export const Details = styled("section", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginBottom: 30,
  "> span": {
    borderRadius: 20,
    marginRight: "5% !important",
    width: "50% !important",
    height: "40vw !important",
    maxHeight: 500,
    img: {
      objectFit: "cover"
    }
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 280,
    "> div:first-of-type": {
      div: {
        display: "flex",
        alignItems: "center",
        fontSize: 34,
        width: "fit-content",
        height: 26,
        padding: "5px 10px",
        backgroundColor: "$white",
        boxShadow: "$boldBlack",
        borderRadius: 8,
        marginTop: -8,
        p: {
          fontSize: 30,
          marginLeft: 10,
          paddingTop: 4
        }
      }
    },
    "> div:last-of-type": {
      div: {
        display: "flex",
        alignItems: "center",
        marginTop: -19,
        fontSize: "$1",
        svg: {
          width: 25,
          height: 25,
          padding: 5,
          backgroundColor: "$white",
          boxShadow: "$boldBlack",
          borderRadius: 8
        },
        span: {
          marginLeft: 6,
          paddingTop: 5
        }
      }
    },
    strong: {
      fontSize: 50,
      marginTop: -25,
      background: "$blueLinear",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent"
    }
  }
})

export const Picker = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  button: {
    marginTop: 10,
    height: 57
  }
})
