import { styled } from "../../../stitches.config"

export const Container = styled("div", {
  width: "92%",
  maxWidth: 1100,
  margin: "auto",

  "> div": {
    width: "100%",
    height: 320,
    backgroundColor: "$white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    "*:not(div:first-of-type)": {
      position: "relative",
      zIndex: 1
    },

    "> div:first-of-type": {
      display: "flex",
      flexDirection: "column",
      marginLeft: 16,
      marginTop: -5,
      height: 250,
      justifyContent: "space-between",

      "> span": {
        position: "absolute !important",
        left: "20%",
        top: 0,
        bottom: 0,
        width: "100% !important",
        img: {
          objectFit: "cover",
          "-webkit-mask-image":
            "-webkit-gradient(linear, right, left, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
          maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))"
        }
      },
      h2: {
        background: "$blueLinear",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        width: "fit-content",
        fontSize: "$4"
      },
      "> p:first-of-type": {
        marginTop: -55,
        marginBottom: -15,
        fontSize: "$1",
        color: "$gray"
      },
      "> div:not(div:first-of-type)": {
        marginBottom: -20
      },
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
      "> div": {
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
      "> div:last-of-type": {
        display: "flex",

        a: {
          height: 40
        },
        button: {
          width: 40,
          height: 40,
          paddingTop: 0,
          svg: {
            width: 18,
            height: 18,
            marginBottom: 2
          }
        },
        "a + button": {
          marginLeft: 6,
          width: "max-content",
          fontSize: "$1",
          paddingInline: 10,
          svg: {
            width: 20,
            height: 20,
            marginBottom: -4
          },
          transition: "0.2s",
          "&:hover": {
            "&::after": {
              content: "Cancel",
              marginLeft: 4
            }
          }
        }
      }
    },

    "> div": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 20
    },

    "&::before": {
      content: "",
      position: "absolute",
      left: 0,
      top: 25,
      bottom: 25,
      borderRadius: "$round",
      width: 3,
      background: "$blueLinear",
      zIndex: 2
    }
  }
})

export const Box = styled("div", {
  width: 160,
  background: "$white",
  borderRadius: 20,
  padding: "15px 14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  svg: {
    width: 28,
    height: 28,
    padding: 6,
    borderRadius: 7,
    background: "$blue",
    color: "$white"
  },
  p: {
    fontSize: "$1",
    marginBottom: -18
  },

  variants: {
    type: {
      reserved: {
        svg: {
          background: "#62b590"
        }
      },
      canceled: {
        svg: {
          background: "$red"
        }
      }
    }
  }
})
