import { Dispatch } from "react"
import { Category } from "../../types/types"
import ArticleFeed from "./ArticleFeed"
import ArticleSkeleton from "./ArticleSkeleton"

type Props = {
  categories: Category
  searchbar: string
  setSearchbar: Dispatch<React.SetStateAction<string>>
}

const ArticleHome = ({ categories, searchbar, setSearchbar }: Props) => {
  return (
    <div className={"content"}>
      {categories ? (
        <ArticleFeed
          categories={categories}
          searchbar={searchbar}
          setSearchbar={setSearchbar}
        />
      ) : (
        <ArticleSkeleton />
      )}
    </div>
  )
}

export default ArticleHome
