/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import Radio from "../ui/StyledRadio"
import Icon from "../ui/Icon"
import Box from "../ui/primitives/Box"
import Flex from "../ui/primitives/Flex"
import { theme } from "../../theme/theme"
import Text from "../ui/primitives/Text"

type Props = {
  setPriceIndex: Dispatch<React.SetStateAction<string>>
  priceIndex: string
}

const ArticleFilters = ({ setPriceIndex, priceIndex }: Props) => {
  return (
    <Box
      css={{
        [theme.media.sm]: {
          width: "326px",
          marginTop: theme.space[3],
        },
      }}
    >
      <Flex
        width="100px"
        css={{
          gap: "1rem",
        }}
      >
        <Icon icon="filter" />
        <Text
          as="h2"
          p={0}
          m={0}
          width={1}
          fontSize={1}
          fontFamily={theme.fonts.heading}
        >
          Filters
        </Text>
      </Flex>
      <Flex
        justifyContent="space-evenly"
        fontSize={theme.fontSizes[0]}
        zIndex={1}
        css={{
          gap: "1rem",
          [theme.media.md]: {
            flexDirection: "column",
          },
          [theme.media.sm]: {
            flexDirection: "column",
          },
        }}
      >
        <Radio
          label="Weniger als 1000€"
          radioName="price-index"
          checkedColor={theme.colors.primary}
          setter={setPriceIndex}
          value="low"
          priceIndex={priceIndex}
        />
        <Radio
          label="Inszwischen 1000€ und 8000€"
          radioName="price-index"
          checkedColor={theme.colors.primary}
          setter={setPriceIndex}
          value="medium"
          priceIndex={priceIndex}
        />
        <Radio
          label="Mehr als 8000€"
          radioName="price-index"
          checkedColor={theme.colors.primary}
          setter={setPriceIndex}
          value="high"
          priceIndex={priceIndex}
        />
        <Radio
          label="Alle"
          radioName="price-index"
          checkedColor={theme.colors.primary}
          setter={setPriceIndex}
          value="all"
          priceIndex={priceIndex}
        />
      </Flex>
    </Box>
  )
}

export default ArticleFilters
