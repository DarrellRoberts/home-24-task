/** @jsxImportSource @emotion/react */

import { Dispatch, useState } from "react"
import Icon from "../ui/Icon"
import SelectMenu from "../ui/SelectMenu"
import { breakpoints } from "../../theme"

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
    <div
      css={{
        // display: "flex",
        // flexDirection: "column",
        // position: "relative",
        alignSelf: "center",
        [breakpoints.md]: {
          alignSelf: "baseline",
        },
      }}
    >
      <div
        css={{
          display: "flex",
          gap: "1rem",
          cursor: "pointer",
          width: "100px",
          float: "left",
        }}
      >
        <Icon icon="list" />
        <h2 css={{ margin: 0, padding: 0, textAlign: "left", width: "100%" }}>
          Sortieren
        </h2>
      </div>
      <div
        css={{
          alignSelf: "center",
        }}
      >
        <SelectMenu
          value={sortedValue}
          setter={setSortedValue}
          options={options}
        />
      </div>
    </div>
  )
}

export default ArticleSelect
