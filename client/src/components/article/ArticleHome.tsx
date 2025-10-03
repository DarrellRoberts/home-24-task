/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import { Category } from "../../types/types"
import ArticleFeed from "./ArticleFeed"
import ArticleSkeleton from "./ArticleSkeleton"

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
    <div css={{ gridArea: "content", gridColumn: "span 2" }}>
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
    </div>
  )
}

export default ArticleHome
