import { Article } from "../../types/types"

var intlNumberFormatValues = ["de-DE", "currency", "EUR"]

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
})

export var ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="article">
      <img src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  )
}
