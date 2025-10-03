/** @jsxImportSource @emotion/react */

import { colors } from "../../theme"
import { Article } from "../../types/types"
import Button from "../ui/Button"
import Card from "../ui/Card"
import Icon from "../ui/Icon"

const ArticleCard = ({ article }: { article: Article }) => {
  const intlNumberFormatValues: [
    string,
    "decimal" | "currency" | "percent" | "unit" | undefined,
    string
  ] = ["de-DE", "currency", "EUR"]

  const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  })
  return (
    <Card
      header={formatter.format(article.prices.regular.value / 100)}
      footer={article.name}
      imgSrc={article.images[0].path}
      bgColor={colors.backgroundAccented}
      textColor={colors.primary}
      button={
        <Button
          label={"In den Warenkorb"}
          bgColor={colors.secondary}
          textColor={colors.text}
          icon={<Icon icon={"trolley"} strokeWidth={1.5} iconWidth={"30px"} />}
        />
      }
    />
  )
}

export default ArticleCard
