/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import styled from "@emotion/styled"
import { colors } from "../../theme"

const StyledHeaderWrapper = styled.header`
  color: ${colors.textInverted};
`

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => {
  return <StyledHeaderWrapper>{children}</StyledHeaderWrapper>
}

export default Header
