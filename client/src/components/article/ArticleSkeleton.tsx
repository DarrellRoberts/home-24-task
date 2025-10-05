/** @jsxImportSource @emotion/react */

import { theme } from "../../theme/theme"
import Card from "../ui/Card"
import Box from "../ui/primitives/Box"
import ProductGrid from "../ui/ProductGrid"

type Props = {
  freq?: number
}

const ArticleSkeleton = ({ freq = 8 }: Props) => {
  const newArr = new Array()
  newArr.length = freq
  newArr.fill(1.1).forEach((_, index) => index * freq)
  return (
    <ProductGrid productLength={8}>
      {newArr.map((skele, index) => (
        <Box key={skele + index}>
          <Card bgColor={theme.colors.backgroundAccented} isSkeleton={true} />
        </Box>
      ))}
    </ProductGrid>
  )
}

export default ArticleSkeleton
