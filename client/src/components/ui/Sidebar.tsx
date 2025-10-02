/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { colors } from "../../theme"

type Props = {
  children: ReactNode
}

const Sidebar = ({ children }: Props) => {
  return (
    <div
      css={{
        background: colors.backgroundInverted,
        color: colors.text,
        gridArea: "sidebar",
      }}
    >
      {children}
    </div>
  )
}

export default Sidebar
