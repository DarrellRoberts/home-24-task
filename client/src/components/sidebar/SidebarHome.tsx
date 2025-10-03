/** @jsxImportSource @emotion/react */

import { ChildCategory } from "../../types/types"
import { Dispatch, SetStateAction, useMemo, useState } from "react"
import Sidebar from "../ui/Sidebar"
import { colors } from "../../theme"
import SidebarSkeleton from "./SidebarSkeleton"

type Props = {
  categories?: ChildCategory
  setSubmittedSearch: Dispatch<React.SetStateAction<string>>
  showSidebar: boolean
  setShowSidebar: Dispatch<React.SetStateAction<boolean>>
}

const SidebarHome = ({
  categories,
  setSubmittedSearch,
  showSidebar,
  setShowSidebar,
}: Props) => {
  const sortedList = useMemo(() => {
    return categories?.list.sort((a, b) => a.name.localeCompare(b.name)) ?? []
  }, [categories])

  return (
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}>
      <h3>Kategorien</h3>
      {sortedList?.length > 0 ? (
        <ul
          css={{
            listStyle: "none",
            margin: 0,
            padding: "0 0 0 1rem",
            fontWeight: 600,
            display: "flex",
            // height: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          {sortedList?.map((category) => (
            <div key={category.name}>
              <li
                onClick={() => setSubmittedSearch(category.name)}
                css={{
                  cursor: "pointer",
                  "&:hover": {
                    color: colors.neutral,
                  },
                }}
              >
                {category.name}
              </li>
              <hr
                css={{ border: `1px dotted ${colors.primary}`, width: "100%" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <SidebarSkeleton />
      )}
    </Sidebar>
  )
}

export default SidebarHome
