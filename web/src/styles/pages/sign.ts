import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh - 150px)",
  paddingLeft: 180,

  "> span": {
    position: "absolute !important",
    top: 0,
    bottom: 0,
    left: 0,
    rigth: "50%",
    img: {
      objectFit: "cover"
    }
  },
  h2: {
    zIndex: 1,
    color: "$white",
    fontSize: "$5",
    width: 800,
    lineHeight: 0.6,
    fontWeight: 400
  },
  "> p": {
    zIndex: 1,
    color: "$white",
    fontSize: "$3",
    lineHeight: 0.8,
    width: 440,
    marginTop: 30
  }
})

export const Content = styled("aside", {
  backgroundColor: "$background",
  zIndex: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  width: 832,
  borderTopLeftRadius: 40,
  borderBottomLeftRadius: 40,
  display: "grid",
  placeItems: "center",
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    h1: {
      fontSize: "$3",
      fontWeight: 400
    },
    p: {
      fontSize: "$1",
      marginTop: 25,

      a: {
        color: "$primary"
      }
    },
    form: {
      width: "100%",
      marginTop: 10,
      button: {
        marginTop: 20
      }
    }
  }
})
