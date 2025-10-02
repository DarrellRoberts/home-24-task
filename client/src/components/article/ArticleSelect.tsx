/** @jsxImportSource @emotion/react */

import { Dispatch, useState } from "react"
import Icon from "../ui/Icon"
import SelectMenu from "../ui/SelectMenu"

type Props = {
  sortedValue: string
  setSortedValue: Dispatch<React.SetStateAction<string>>
}

const ArticleSelect = ({ sortedValue, setSortedValue }: Props) => {
  const [showSelect, setShowSelect] = useState<boolean>(true)
  const options = [
    { value: "low", label: "Niedrigster Preis" },
    { value: "high", label: "Höchster Preis " },
  ]
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingBottom: showSelect ? "4rem" : 0,
        transition: "all ease-in 0.2s",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          gap: "1rem",
          cursor: "pointer",
          width: "100px",
        }}
        onClick={() => setShowSelect(!showSelect)}
      >
        <h2 css={{ margin: 0, padding: 0 }}>Sortieren</h2>
        <Icon icon="list" />
      </div>
      <div
        css={{
          alignSelf: "center",
          opacity: showSelect ? 1 : 0,
          position: "absolute",
          transform: showSelect ? "translateY(100%)" : "translateY(-10%)",
          transition: "all ease-in 0.2s",
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
