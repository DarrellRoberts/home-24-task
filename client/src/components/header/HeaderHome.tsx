/** @jsxImportSource @emotion/react */

import { type Dispatch } from "react"
import { colors } from "../../theme"
import Header from "../ui/Header"
import Searchbar from "../ui/Searchbar"

type Props = {
  setSearchbar: Dispatch<React.SetStateAction<string>>
  searchbar: string
}

const HeaderHome = ({ searchbar, setSearchbar }: Props) => {
  return (
    <Header>
      <div
        css={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "2.25rem",
        }}
      >
        <div
          css={{
            width: "160px",
            background: colors.primary,
            padding: "1rem",
            borderBottomRightRadius: "10px",
          }}
        >
          <strong css={{ padding: "1rem" }}>home24</strong>
        </div>
        <Searchbar
          value={searchbar}
          setter={setSearchbar}
          placeholder="Wonach Suchen Sie..."
        />
      </div>
    </Header>
  )
}

export default HeaderHome
