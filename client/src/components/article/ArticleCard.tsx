/** @jsxImportSource @emotion/react */

import { theme } from "../../theme/theme"
import { Article } from "../../types/types"
import Button from "../ui/StyledButton"
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
      bgColor={theme.colors.backgroundAccented}
      textColor={theme.colors.primary}
      button={
        <Button
          label={"In den Warenkorb"}
          bgColor={theme.colors.secondary}
          textColor={theme.colors.text}
          icon={<Icon icon={"trolley"} strokeWidth={1.5} iconWidth={"30px"} />}
        />
      }
    />
  )
}

export default ArticleCard
