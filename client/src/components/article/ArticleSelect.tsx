/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import Icon from "../ui/Icon"
import SelectMenu from "../ui/StyledSelectMenu"
import { theme } from "../../theme/theme"
import Box from "../ui/primitives/Box"
import Flex from "../ui/primitives/Flex"
import Text from "../ui/primitives/Text"

type Props = {
  sortedValue: string
  setSortedValue: Dispatch<React.SetStateAction<string>>
}

const ArticleSelect = ({ sortedValue, setSortedValue }: Props) => {
  const options = [
    { value: "low", label: "Niedrigster Preis" },
    { value: "high", label: "Höchster Preis " },
  ]
  return (
    <Box
      alignSelf="center"
      css={{
        [theme.media.md]: { alignSelf: "baseline" },
        [theme.media.sm]: { marginTop: theme.space[3] },
      }}
    >
      <Flex cursor="pointer" width="100px" css={{ gap: "1rem" }}>
        <Icon icon="list" />
        <Text
          as="h2"
          p={0}
          m={0}
          width={1}
          fontSize={1}
          fontFamily={theme.fonts.heading}
        >
          Sortieren
        </Text>
      </Flex>
      <Box alignSelf="center">
        <SelectMenu
          value={sortedValue}
          setter={setSortedValue}
          options={options}
        />
      </Box>
    </Box>
  )
}

export default ArticleSelect
