import { ArticleCard } from "./ArticleCard"
import { type Category } from "../../types/types"

type Props = {
  categories: Category
}

const ArticleFeed = ({ categories }: Props) => {
  return (
    <div className="content">
      <h1>
        {categories?.name}
        <small> {categories.articleCount}</small>
      </h1>
      {categories?.categoryArticles?.articles?.map((article) => (
        <div className="articles">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleFeed
