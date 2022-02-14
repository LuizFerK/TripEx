import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh - 120px)",
  paddingLeft: "8%",

  "> span": {
    backgroundColor: "red",
    position: "absolute !important",
    top: 0,
    bottom: 0,
    left: 0,
    right: "38vw",
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
  },

  "@media(max-width: 1750px)": {
    paddingLeft: "4%",
    h2: {
      width: "45%"
    }
  },
  "@media(max-width: 1360px)": {
    "> span": {
      display: "none !important"
    },
    h2: {
      display: "none"
    },
    "> p": {
      display: "none"
    }
  }
})

export const Content = styled("aside", {
  backgroundColor: "$background",
  zIndex: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  borderTopLeftRadius: 40,
  borderBottomLeftRadius: 40,
  display: "grid",
  placeItems: "center",
  width: "40vw",
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
        color: "$blue"
      }
    },
    form: {
      width: 500,
      marginTop: 10,
      paddingInline: 40,
      "@media(max-width: 460px)": {
        paddingInline: 20
      },
      button: {
        marginTop: 20
      }
    }
  },
  "@media(max-width: 1360px)": {
    width: "100%",
    top: 85
  }
})

export const Error = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0px 40px 10px",
  div: {
    width: "100%",
    strong: {
      fontSize: 34,
      marginRight: "auto",
      color: "$red"
    },
    div: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      backgroundColor: "#db5a8915",
      padding: "5px 20px 1px",
      borderRadius: 20,
      position: "relative",
      marginBlock: 4,
      b: {
        fontSize: 30,
        marginBottom: -18
      },
      span: {
        fontSize: "$1"
      },
      "&::before": {
        content: "",
        position: "absolute",
        left: 0,
        top: 18,
        bottom: 18,
        borderRadius: "$round",
        width: 3,
        background: "$red",
        zIndex: 2
      }
    }
  }
})
