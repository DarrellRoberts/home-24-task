/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "160px auto auto",
        gridTemplateRows: "50px 1fr 50px",
        height: "100vh",
        gridTemplateAreas:
          '"sidebar header header"' +
          '"sidebar content content"' +
          '"footer footer footer"',
      }}
    >
      {children}
    </div>
  )
}

export default Layout
