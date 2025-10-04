// theme.ts

import { Theme } from "@emotion/react"

// 1. Define the breakpoints array first.
// Styled System uses a mobile-first, array-based approach for responsive props.
// It uses these values to construct the @media queries automatically.
const breakpointsArray = [
  "600px", // sm: up to 600px is the default mobile size
  "1300px", // md: 601px to 1300px (tablet/desktop)
  // You can add more breakpoints here: '1600px', etc.
]

// 2. Define the main theme object using the required keys.
export const theme = {
  // SPACING: Used for 'm' (margin) and 'p' (padding) props.
  // Although not explicitly defined in your original theme, a standard
  // Styled System theme includes a spacing array for constraint-based layout.
  // We'll use a common 8-point scale (0, 4, 8, 16, 32, 64, 128...)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // COLORS: Used for 'color', 'bg', and 'borderColor' props.
  colors: {
    // Primary/Accent Colors
    primary: "#664E36",
    secondary: "#F16B32",

    // Semantic Colors (matching your original keys)
    neutral: "#A1A1A9",
    text: "#34281d",
    textInverted: "#FFF3E0",
    background: "#FFF3E0",
    backgroundInverted: "#B29259",
    backgroundAccented: "#fdf5e8ff",

    // Optional: Add a 'gray' scale or other common utility colors here.
  },

  // FONT SIZES: Used for the 'fontSize' prop (using an array or object).
  // When using the 'fontSize' array, you can access values by index: fontSize={2}
  fontSizes: [
    "1rem", // base/0 (Used as default if not specified in your object below)
    "clamp(1.1rem, 2vw, 1.5rem)", // md (1)
    "clamp(1.15rem, 2vw, 3rem)", // lg (2)
    "clamp(1.2rem, 2vw, 5rem)", // xl (3)
  ],

  // TYPOGRAPHY: Used for 'fontFamily' and 'fontWeight' props.
  fonts: {
    // Styled System uses 'body' and 'heading' as common defaults.
    body: "'Playfair Display', serif", // Your 'font.main'
    heading: "'Playfair Display', serif",
    main: "'Playfair Display', serif", // Keep your original key for direct access
  },

  // BREAKPOINTS: Used for responsive array notation (e.g., <Box width={[1, 1/2]} />)
  // Styled System automatically manages the media queries for you using this array.
  breakpoints: breakpointsArray,

  // EMOTION SPECIFIC: Use this to maintain your original named media queries
  // for when you write traditional CSS blocks (styled.div` ${theme.media.sm} { ... } `)
  // You can derive these from the breakpoints array if you need the direct string.
  media: {
    sm: `@media (max-width: ${breakpointsArray[0]})`,
    md: `@media (min-width: ${breakpointsArray[0]}) and (max-width: ${breakpointsArray[1]})`,
  },
}
