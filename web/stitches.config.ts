import { createStitches } from "@stitches/react"

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#EDEDED",
      white: "#F5F5F5",
      black: "#1C1B20",
      gray: "#A2A0A6",
      primary: "#5381F9",
      blueLinear:
        "linear-gradient(93deg, #0052D4 -54%, #4364F7 23%, #6FB1FC 100%)"
    },
    fonts: {
      dongle: "Dongle",
      sans: "Inter, sans-serif"
    },
    fontSizes: {
      1: "30px",
      2: "36px",
      3: "48px",
      4: "56px",
      5: "144px"
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
    fontWeights: {
      1: 300,
      2: 400,
      3: 700
    },
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {
      blue: "0px 4px 50px rgba(83, 128, 249, 0.5)",
      black: "0px 4px 50px rgba(0, 0, 0, 0.05)"
    },
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
