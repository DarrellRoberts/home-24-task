import { Article } from "../../types/types"

const ArticleCard = ({ article }: { article: Article }) => {
  const intlNumberFormatValues = ["de-DE", "currency", "EUR"]

  const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  })
  return (
    <div className="article">
      <img src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  )
}

export default ArticleCard
