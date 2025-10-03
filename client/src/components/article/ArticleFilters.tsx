/** @jsxImportSource @emotion/react */

import { Dispatch, useState } from "react"
import { breakpoints, colors, fontSize } from "../../theme"
import Radio from "../ui/Radio"
import Icon from "../ui/Icon"

type Props = {
  setPriceIndex: Dispatch<React.SetStateAction<string>>
  priceIndex: string
}

const ArticleFilters = ({ setPriceIndex, priceIndex }: Props) => {
  return (
    <div
      css={{
        position: "relative",
      }}
    >
      <div
        css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100px",
        }}
      >
        <Icon icon="filter" />
        <h2 css={{ padding: 0, margin: 0 }}>Filters</h2>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-evenly",
          fontWeight: 600,
          gap: "1rem",
          fontSize: fontSize.base,
          zIndex: 1,
          width: "100%",
          [breakpoints.md]: {
            flexDirection: "column",
            gap: "1rem",
          },
          [breakpoints.sm]: {
            flexDirection: "column",
            gap: "1rem",
          },
        }}
      >
        <Radio
          label="Weniger als 1000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="low"
          priceIndex={priceIndex}
        />
        <Radio
          label="Inszwischen 1000€ und 8000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="medium"
          priceIndex={priceIndex}
        />
        <Radio
          label="Mehr als 8000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="high"
          priceIndex={priceIndex}
        />
        <Radio
          label="Alle"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="all"
          priceIndex={priceIndex}
        />
      </div>
    </div>
  )
}

export default ArticleFilters
