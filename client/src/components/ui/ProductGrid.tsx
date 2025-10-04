/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import styled from "@emotion/styled"
import Grid from "./primitives/Grid"
import Flex from "./primitives/Flex"
import { breakpoints } from "../../theme"

type Props = {
  children: ReactNode
  productLength?: number
}

const ProductGridStyle = styled(Grid)`
  gap: 1rem;
  padding: 0 5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  ${breakpoints.sm} {
    padding: 0;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  }

  ${breakpoints.md} {
    padding: 0;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  }
`

const ProductGrid = ({ children, productLength = 0 }: Props) => {
  const isContent = productLength > 0

  const heightProp = productLength < 5 ? "100vh" : "auto"

  if (isContent) {
    return <ProductGridStyle height={heightProp}>{children}</ProductGridStyle>
  }

  return (
    <Flex height={heightProp} justifyContent="center" alignItems="center">
      {children}
    </Flex>
  )
}

export default ProductGrid
