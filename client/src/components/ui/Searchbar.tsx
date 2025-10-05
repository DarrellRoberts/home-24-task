/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import Icon from "./Icon"
import { theme } from "../../theme/theme"
import Flex from "./primitives/Flex"
import Box from "./primitives/Box"

type Props = {
  setter: Dispatch<React.SetStateAction<string>>
  setterTwo: Dispatch<React.SetStateAction<boolean>>
  searchbar: string
  setSearchbar: Dispatch<React.SetStateAction<string>>
  placeholder: string
  isDisabled: boolean
}

const Searchbar = ({
  setter,
  setterTwo,
  placeholder,
  searchbar,
  setSearchbar,
  isDisabled,
}: Props) => {
  return (
    <Flex
      css={{
        width: "auto",
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: theme.rounded.light,
        paddingLeft: "1rem",
        marginRight: "1rem",
        fontSize: theme.fontSizes[2],
        background: theme.colors.background,
        [theme.media.sm]: {
          marginRight: "0",
          marginTop: "2rem",
          width: "95%",
        },
        [theme.media.md]: {
          marginRight: "0",
          width: "clamp(300px, 60vw, 500px)",
        },
      }}
    >
      <input
        disabled={isDisabled}
        placeholder={placeholder}
        value={searchbar}
        onClick={() => setterTwo(true)}
        onChange={(e) => setSearchbar(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setter(searchbar)
            setterTwo(false)
          }
        }}
        css={{
          border: "none",
          fontSize: "1.1rem",
          fontWeight: "600",
          outline: "none",
          borderRadius: theme.rounded.light,
          background: theme.colors.background,
          width: "500px",
          [theme.media.sm]: {
            width: "100%",
          },
        }}
      />
      <Box
        data-testid="clear-button"
        onClick={(e: Event) => {
          e.stopPropagation()
          setter("")
          setterTwo(false)
          setSearchbar("")
        }}
        css={{ cursor: searchbar ? "pointer" : "default" }}
      >
        <Icon icon="xMark" strokeColor={searchbar && theme.colors.primary} />
      </Box>
      <Box
        onClick={(e: Event) => {
          e.stopPropagation()
          setter(searchbar)
          setterTwo(false)
        }}
        css={{
          backgroundColor: theme.colors.primary,
          padding: "0 1rem",
          display: "flex",
          justifyContent: "center",
          borderRadius: theme.rounded.lightest,
          alignItems: "center",
          height: "100%",
          "&:hover": {
            cursor: "pointer",
          },
          "&:active > *": {
            transform: "scale(0.85)",
          },
        }}
      >
        <Icon icon={"magniGlass"} />
      </Box>
    </Flex>
  )
}

export default Searchbar
