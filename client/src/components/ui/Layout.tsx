/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {children}
    </div>
  )
}

export default Layout
