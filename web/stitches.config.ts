import { createStitches } from "@stitches/react"

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#EDEDED",
      white: "#f4f4f4",
      black: "#060606",
      gray: "#c4c4c4",
      grayLight: "#c4c4c440",
      primary: "#343A40",
      secondary: "#17A2B8",
      secondaryDark: "#118091",
      blueLinear: "linear-gradient(45deg, #17A2B8, #09B175)"
    },
    fonts: {
      sans: "Inter, sans-serif",
      arial: "Arial"
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px"
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px"
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px"
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px"
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1180px)",
    bp5: "(min-width: 1360px)"
  }
})
