/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { breakpoints } from "../../theme"

type Props = {
  children: ReactNode
  productLength?: number
}

const ProductGrid = ({ children, productLength = 0 }: Props) => {
  return (
    <div
      css={{
        display: productLength > 0 ? "grid" : "flex",
        justifyContent: productLength === 0 ? "center" : "auto",
        alignItems: productLength === 0 ? "center" : "auto",
        height: productLength < 5 ? "100vh" : "auto",
        gap: "1rem",
        padding: "0 5rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        [breakpoints.sm]: {
          padding: 0,
          gap: "5px",
          gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
        },
        [breakpoints.md]: {
          padding: 0,
          gap: "5px",
          gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))",
        },
      }}
    >
      {children}
    </div>
  )
}

export default ProductGrid
