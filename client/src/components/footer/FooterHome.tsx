/** @jsxImportSource @emotion/react */
import { colors } from "../../theme"
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
        }}
      >
        <span css={{ fontSize: "1.2rem" }}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </span>
      </div>
    </Footer>
  )
}

export default FooterHome
