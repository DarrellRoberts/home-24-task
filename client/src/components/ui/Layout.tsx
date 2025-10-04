/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import styled from "@emotion/styled"
import Box from "./primitives/Box"

const StyledLayoutWrapper = styled(Box)`
  /* The core flex styles are now defined here */
  display: flex;
  flex-direction: column;
  width: 100%;
`

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return <StyledLayoutWrapper>{children}</StyledLayoutWrapper>
}

export default Layout
