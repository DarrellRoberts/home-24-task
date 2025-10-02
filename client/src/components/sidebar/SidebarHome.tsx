/** @jsxImportSource @emotion/react */

import { ChildCategory } from "../../types/types"
import { Dispatch, useMemo } from "react"
import Sidebar from "../ui/Sidebar"
import { colors } from "../../theme"
import SidebarSkeleton from "./SidebarSkeleton"

type Props = {
  categories?: ChildCategory
  setSearchbar: Dispatch<React.SetStateAction<string>>
}

const SidebarHome = ({ categories, setSearchbar }: Props) => {
  const sortedList = useMemo(() => {
    return categories?.list.sort((a, b) => a.name.localeCompare(b.name)) ?? []
  }, [categories])

  return (
    <Sidebar>
      <h3>Kategorien</h3>
      {sortedList?.length > 0 ? (
        <ul
          css={{
            listStyle: "none",
            margin: 0,
            padding: "0 0 0 1rem",
            fontWeight: 600,
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          {sortedList?.map((category) => (
            <li key={category.name} onClick={() => setSearchbar(category.name)}>
              {category.name}
            </li>
          ))}
        </ul>
      ) : (
        <SidebarSkeleton />
      )}
    </Sidebar>
  )
}

export default SidebarHome
