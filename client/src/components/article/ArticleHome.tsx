/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import { Category } from "../../types/types"
import ArticleFeed from "./ArticleFeed"
import ArticleSkeleton from "./ArticleSkeleton"
import Box from "../ui/primitives/Box"

type Props = {
  categories: Category
  submittedSearch: string
  setSubmittedSearch: Dispatch<React.SetStateAction<string>>
  setShowSidebar: Dispatch<React.SetStateAction<boolean>>
}

const ArticleHome = ({
  categories,
  submittedSearch,
  setSubmittedSearch,
  setShowSidebar,
}: Props) => {
  return (
    <Box css={{ gridColumn: "span 2" }}>
      {categories ? (
        <ArticleFeed
          categories={categories}
          submittedSearch={submittedSearch}
          setSubmittedSearch={setSubmittedSearch}
          setShowSidebar={setShowSidebar}
        />
      ) : (
        <ArticleSkeleton />
      )}
    </Box>
  )
}

export default ArticleHome
