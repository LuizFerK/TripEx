import { globalCss } from "../../stitches.config"

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  body: {
    backgroundColor: "$background",
    fontFamily: "$arial",
    color: "$black",
    marginTop: 85
  },
  a: {
    cursor: "pointer",
    textDecoration: "none",
    color: "$black"
  },
  button: {
    cursor: "pointer"
  },
  "input:-webkit-autofill": {
    "-webkit-background-clip": "text"
  }
})
