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
    color: "$black"
  },
  a: {
    cursor: "pointer",
    textDecoration: "none",
    color: "$black"
  }
})
