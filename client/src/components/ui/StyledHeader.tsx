/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import Header from "./primitives/Header"

type Props = {
  children: ReactNode
}

const StyledHeader = ({ children }: Props) => {
  return <Header>{children}</Header>
}

export default StyledHeader
