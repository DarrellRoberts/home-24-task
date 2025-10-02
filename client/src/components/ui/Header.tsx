/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { colors } from "../../theme"

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <div
      css={{
        color: colors.textInverted,
        gridArea: "header",
      }}
    >
      {children}
    </div>
  )
}

export default Header
