const breakpointsArray = ["600px", "1300px"]

export const theme = {
  space: [
    0,
    "0.25rem",
    "0.5rem",
    "1rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "7rem",
    "8rem",
  ],

  colors: {
    primary: "#664E36",
    secondary: "#F16B32",

    neutral: "#6d6d75ff",
    text: "#34281d",
    textInverted: "#FFF3E0",
    background: "#FFF3E0",
    backgroundAccented: "#fdf5e8ff",
  },

  fontSizes: [
    "1rem",
    "1.5rem",
    "2.25rem",
    "clamp(1.1rem, 2vw, 1.5rem)",
    "clamp(1.25rem, 2vw, 3rem)",
    "clamp(1.5rem, 3vw, 5rem)",
  ],

  rounded: {
    lightest: "5px",
    light: "10px",
  },

  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Playfair Display', serif",
  },

  breakpoints: breakpointsArray,

  media: {
    sm: `@media (max-width: ${breakpointsArray[0]})`,
    md: `@media (min-width: ${breakpointsArray[0]}) and (max-width: ${breakpointsArray[1]})`,
  },
}
