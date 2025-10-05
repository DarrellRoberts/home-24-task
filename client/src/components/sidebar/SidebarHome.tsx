/** @jsxImportSource @emotion/react */

import { ChildCategory } from "../../types/types"
import { Dispatch, useMemo } from "react"
import Sidebar from "../ui/StyledSidebar"
import { theme } from "../../theme/theme"
import Text from "../ui/primitives/Text"
import Box from "../ui/primitives/Box"
import { ListItem, UList } from "../ui/primitives/List"
import StyledDivider from "../ui/StyledDivider"

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
      <Text as="h3" fontSize={theme.fontSizes[1]} py={3}>
        Kategorien
      </Text>
      {sortedList?.length > 0 && (
        <UList as="ul" paddingRight={2}>
          {sortedList?.map((category) => (
            <Box key={category.name}>
              <ListItem
                css={{
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.colors.neutral,
                  },
                }}
                onClick={() => {
                  setSubmittedSearch(category.name)
                  setShowSidebar(false)
                }}
              >
                {category.name}
              </ListItem>
              <StyledDivider
                thickness="1px"
                borderStyle="dotted"
                color={theme.colors.primary}
              />
            </Box>
          ))}
        </UList>
      )}
    </Sidebar>
  )
}

export default SidebarHome
