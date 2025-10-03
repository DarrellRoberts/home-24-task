/** @jsxImportSource @emotion/react */

import { useState, type Dispatch } from "react"
import { breakpoints, colors } from "../../theme"
import Header from "../ui/Header"
import Searchbar from "../ui/Searchbar"

type Props = {
  setSubmittedSearch: Dispatch<React.SetStateAction<string>>
  setShowBlur: Dispatch<React.SetStateAction<boolean>>
  showBlur: boolean
}

const HeaderHome = ({ setSubmittedSearch, setShowBlur, showBlur }: Props) => {
  const [searchbar, setSearchbar] = useState<string>("")
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
          [breakpoints.sm]: {
            flexDirection: "column",
            alignItems: "start",
          },
        }}
      >
        <div
          css={{
            width: "160px",
            background: colors.primary,
            padding: "1rem",
            borderBottomRightRadius: "10px",
            filter: showBlur ? "blur(1rem)" : "blur(0)",
            transition: "blur 0.25s ease-in-out",
          }}
        >
          <strong
            css={{
              padding: "1rem",
            }}
          >
            home24
          </strong>
        </div>
        <Searchbar
          setter={setSubmittedSearch}
          setterTwo={setShowBlur}
          searchbar={searchbar}
          setSearchbar={setSearchbar}
          placeholder="Wonach Suchen Sie..."
        />
      </div>
    </Header>
  )
}

export default HeaderHome
