/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react"
import { colors } from "./theme"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
          body {
            background: ${colors.background};
            color: ${colors.text};
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-style: normal;
            margin: 0;
            padding: 0;
          },
        `}
      />
      <HomePage />
    </>
  )
}

export default App
