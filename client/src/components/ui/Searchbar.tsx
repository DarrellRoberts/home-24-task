/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import { breakpoints, colors, font } from "../../theme"
import Icon from "./Icon"

type Props = {
  setter: Dispatch<React.SetStateAction<string>>
  setterTwo: Dispatch<React.SetStateAction<boolean>>
  searchbar: string
  setSearchbar: Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const Searchbar = ({
  setter,
  setterTwo,
  placeholder,
  searchbar,
  setSearchbar,
}: Props) => {
  return (
    <div
      css={{
        display: "flex",
        border: `2px solid ${colors.primary}`,
        borderRadius: "10px",
        paddingLeft: "1rem",
        marginRight: "1rem",
        background: colors.background,
        [breakpoints.sm]: {
          marginRight: "0",
          width: "95%",
        },
        [breakpoints.md]: {
          marginRight: "0",
          width: "55%",
        },
      }}
    >
      <input
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
          fontFamily: font.main,
          borderRadius: "10px",
          background: colors.background,
          width: "500px",
          [breakpoints.sm]: {
            width: "100%",
          },
        }}
      />
      <div
        onClick={(e) => {
          e.stopPropagation()
          setter("")
          setterTwo(false)
          setSearchbar("")
        }}
        css={{ cursor: searchbar ? "pointer" : "default" }}
      >
        <Icon icon="xMark" strokeColor={searchbar && colors.primary} />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setter(searchbar)
          setterTwo(false)
        }}
        css={{
          backgroundColor: colors.primary,
          padding: "0 1rem",
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          alignItems: "center",
          height: "100%",
          "&:hover": {
            cursor: "pointer",
          },
          "&:active": {
            background: colors.background,
          },
          "&:active > *": {
            background: colors.background,
          },
        }}
      >
        <Icon icon={"magniGlass"} />
      </div>
    </div>
  )
}

export default Searchbar
