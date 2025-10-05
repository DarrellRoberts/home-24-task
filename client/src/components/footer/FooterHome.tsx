/** @jsxImportSource @emotion/react */

import { theme } from "../../theme/theme"
import Footer from "../ui/StyledFooter"
import Flex from "../ui/primitives/Flex"
import Text from "../ui/primitives/Text"

const FooterHome = () => {
  return (
    <Footer>
      <Flex
        position="absolute"
        justifyContent="end"
        bottom={0}
        right={0}
        m={3}
        color={theme.colors.textInverted}
        css={{
          [theme.media.sm]: {
            margin: 0,
          },
        }}
      >
        <Text as="span" fontSize={theme.fontSizes[0]}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </Text>
      </Flex>
    </Footer>
  )
}

export default FooterHome
