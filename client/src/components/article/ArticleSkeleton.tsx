/** @jsxImportSource @emotion/react */

import { breakpoints, colors } from "../../theme"
import Card from "../ui/Card"
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
        <div key={skele + index}>
          <Card bgColor={colors.backgroundAccented} isSkeleton={true} />
        </div>
      ))}
    </ProductGrid>
  )
}

export default ArticleSkeleton
