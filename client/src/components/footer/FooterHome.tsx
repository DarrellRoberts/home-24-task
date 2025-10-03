/** @jsxImportSource @emotion/react */
import { breakpoints, colors, fontSize } from "../../theme"
import Footer from "../ui/Footer"

const FooterHome = () => {
  return (
    <Footer>
      <div
        css={{
          display: "flex",
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "1rem",
          color: colors.textInverted,
          [breakpoints.sm]: {
            margin: 0,
          },
        }}
      >
        <span css={{ fontSize: fontSize.base }}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </span>
      </div>
    </Footer>
  )
}

export default FooterHome
