/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import { colors, font } from "../../theme"
import Icon from "./Icon"

type Props = {
  value: string
  setter: Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const Searchbar = ({ value, setter, placeholder }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        border: `2px solid ${colors.primary}`,
        borderRadius: "10px",
        paddingLeft: "1rem",
        marginRight: "1rem",
        marginTop: "1rem",
        background: colors.background,
      }}
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setter(e.target.value)}
        css={{
          border: "none",
          fontSize: "1.1rem",
          fontWeight: "600",
          outline: "none",
          fontFamily: font.main,
          borderRadius: "10px",
          background: colors.background,
          width: "500px",
        }}
      />
      <div
        onClick={() => setter("")}
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
        <Icon icon={"xMark"} />
      </div>
    </div>
  )
}

export default Searchbar
