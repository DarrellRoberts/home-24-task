/** @jsxImportSource @emotion/react */

import { Dispatch, useState } from "react"
import { colors } from "../../theme"
import Radio from "../ui/Radio"
import Icon from "../ui/Icon"

type Props = { setPriceIndex: Dispatch<React.SetStateAction<string>> }

const ArticleFilters = ({ setPriceIndex }: Props) => {
  const [showFilters, setShowFilters] = useState<boolean>(true)
  return (
    <div
      css={{
        position: "relative",
        paddingBottom: showFilters ? "4rem" : 0,
        transition: "all ease-in 0.2s",
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "space-evenly",
          fontWeight: 600,
          fontSize: "1rem",
          position: "absolute",
          zIndex: 1,
          width: "100%",
          opacity: showFilters ? 1 : 0,
          transform: showFilters ? "translateY(100%)" : "translateY(-10%)",
          transition: "all ease-in 0.2s",
        }}
      >
        <Radio
          label="Weniger als 1000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="low"
        />
        <Radio
          label="Inszwischen 1000€ und 8000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="medium"
        />
        <Radio
          label="Mehr als 8000€"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="high"
        />
        <Radio
          label="Alle"
          radioName="price-index"
          checkedColor={colors.primary}
          setter={setPriceIndex}
          value="all"
        />
      </div>
      <div
        css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          zIndex: 2,
          width: "100px",
        }}
        onClick={() => setShowFilters(!showFilters)}
      >
        <h2>Filters</h2>
        <Icon icon="filter" />
      </div>
    </div>
  )
}

export default ArticleFilters
