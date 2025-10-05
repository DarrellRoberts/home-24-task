/** @jsxImportSource @emotion/react */

import { useState, type Dispatch } from "react"
import Header from "../ui/StyledHeader"
import Searchbar from "../ui/Searchbar"
import Flex from "../ui/primitives/Flex"
import { theme } from "../../theme/theme"
import Box from "../ui/primitives/Box"
import Text from "../ui/primitives/Text"
import StyledLink from "../ui/StyledLink"

type Props = {
  setSubmittedSearch: Dispatch<React.SetStateAction<string>>
  setShowBlur: Dispatch<React.SetStateAction<boolean>>
  showBlur: boolean
  isDisabled: boolean
}

const HeaderHome = ({
  setSubmittedSearch,
  setShowBlur,
  showBlur,
  isDisabled,
}: Props) => {
  const [searchbar, setSearchbar] = useState<string>("")
  return (
    <Header>
      <Flex
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        fontSize={theme.fontSizes[4]}
        css={{
          [theme.media.sm]: {
            flexDirection: "column",
            alignItems: "start",
          },
        }}
      >
        <Box
          width="160px"
          bg={theme.colors.primary}
          p={theme.space[2]}
          borderBottomRightRadius={theme.rounded.light}
          filter={showBlur ? "blur(1rem)" : "blur(0)"}
          transition="blur 0.25s ease-in-out"
        >
          <Text
            as="strong"
            fontSize={theme.fontSizes[2]}
            p={3}
            fontFamily={theme.fonts.heading}
          >
            <StyledLink url="/">home24</StyledLink>
          </Text>
        </Box>
        <Searchbar
          setter={setSubmittedSearch}
          setterTwo={setShowBlur}
          searchbar={searchbar}
          setSearchbar={setSearchbar}
          placeholder={
            showBlur ? "Enter zum Schließen" : "Wonach Suchen Sie..."
          }
          isDisabled={isDisabled}
        />
      </Flex>
    </Header>
  )
}

export default HeaderHome
