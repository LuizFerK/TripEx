import { globalCss } from "../../stitches.config"

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  body: {
    backgroundColor: "$background",
    fontFamily: "$dongle",
    fontWeight: "$2",
    fontSize: "$2",
    color: "$black",
    marginTop: 120,
    caretColor: "transparent"
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
  },
  "abbr[title]": {
    textDecoration: "none"
  }
})
