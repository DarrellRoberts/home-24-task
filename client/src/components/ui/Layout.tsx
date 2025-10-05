/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import Flex from "./primitives/Flex"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDirection="column" height="100%">
      {children}
    </Flex>
  )
}

export default Layout
