/** @jsxImportSource @emotion/react */

import ArticleCard from "./ArticleCard"
import { type Category } from "../../types/types"
import { Dispatch, useMemo, useState } from "react"
import ArticleFilters from "./ArticleFilters"
import ArticleSelect from "./ArticleSelect"
import Button from "../ui/StyledButton"
import Pagination from "../ui/Pagination"
import Icon from "../ui/Icon"
import ProductGrid from "../ui/ProductGrid"
import Box from "../ui/primitives/Box"
import Text from "../ui/primitives/Text"
import Flex from "../ui/primitives/Flex"
import { theme } from "../../theme/theme"

type Props = {
  categories: Category
  submittedSearch: string
  setSubmittedSearch: Dispatch<React.SetStateAction<string>>
  setShowSidebar: Dispatch<React.SetStateAction<boolean>>
}

const ArticleFeed = ({
  categories,
  submittedSearch,
  setSubmittedSearch,
  setShowSidebar,
}: Props) => {
  const [sortedValue, setSortedValue] = useState<string>("low")
  const [priceIndex, setPriceIndex] = useState<string>("all")
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [totalItems, setTotalItems] = useState<number>(0)

  const itemsPerPage = 25
  const totalPages = Math.ceil(
    categories?.categoryArticles?.articles.length / itemsPerPage
  )

  const handleNextPage = () => {
    if (pageIndex + 1 !== totalPages) {
      setPageIndex(pageIndex + 1)
    } else {
      return
    }
  }

  const handlePrevPage = () => {
    if (pageIndex !== 0) {
      setPageIndex(pageIndex - 1)
    } else {
      return
    }
  }

  const sortedAndFilteredList = useMemo(() => {
    const filteredList =
      categories?.categoryArticles?.articles
        .filter((article) => {
          return article.name
            .toLowerCase()
            .includes(submittedSearch.toLowerCase())
        })
        .filter((article) => {
          if (priceIndex === "all") {
            return article.name
              .toLowerCase()
              .includes(submittedSearch.toLowerCase())
          } else if (priceIndex === "low") {
            return article.prices.regular.value / 100 < 1000
          } else if (priceIndex === "medium") {
            return (
              article.prices.regular.value / 100 < 8000 &&
              article.prices.regular.value / 100 > 1000
            )
          } else if (priceIndex === "high") {
            return article.prices.regular.value / 100 > 8000
          } else {
            return
          }
        }) || []

    const sortedList = [...filteredList].sort((a, b) => {
      const priceA = a.prices?.regular?.value ?? 0
      const priceB = b.prices?.regular?.value ?? 0

      if (sortedValue === "low") {
        return priceA - priceB
      } else {
        return priceB - priceA
      }
    })

    setTotalItems(sortedList.length)

    const startIndex = pageIndex && pageIndex * itemsPerPage
    const endIndex = itemsPerPage * (pageIndex + 1)
    const paginatedList = sortedList?.slice(startIndex, endIndex)

    return paginatedList
  }, [submittedSearch, sortedValue, categories, priceIndex, pageIndex])

  return (
    <Box ml={3}>
      <Text as="h1">
        {categories?.name}
        <small>
          {" "}
          ({sortedAndFilteredList.length}/{totalItems})
        </small>
      </Text>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
        pb={5}
        css={{
          [theme.media.sm]: {
            flexDirection: "column",
          },

          [theme.media.md]: {
            display: "grid",
            gridTemplateRows: "auto auto",
            gap: theme.space[3],
            alignContent: "center",
            justifyItems: "center",
          },
        }}
      >
        <Box
          pt={4}
          css={{
            [theme.media.md]: {
              gridColumn: "span 2",
            },
          }}
        >
          <Button
            label="Kategorien"
            textColor={theme.colors.primary}
            variant="outline"
            clickFunc={() => setShowSidebar(true)}
            icon={<Icon icon={"arrowLeft"} />}
          />
        </Box>

        <ArticleFilters priceIndex={priceIndex} setPriceIndex={setPriceIndex} />
        <ArticleSelect
          setSortedValue={setSortedValue}
          sortedValue={sortedValue}
        />
      </Flex>
      {submittedSearch && (
        <Box>
          <Text as="h2">Ergebnisse für: {submittedSearch}</Text>
          <Button
            label="Zurücksetzen"
            clickFunc={() => setSubmittedSearch("")}
          />
        </Box>
      )}
      <Pagination
        pageIndex={pageIndex}
        pageNumber={pageIndex + 1}
        toNextPage={handleNextPage}
        toPrevPage={handlePrevPage}
        totalPages={totalPages}
      />
      <ProductGrid productLength={sortedAndFilteredList.length}>
        {sortedAndFilteredList.length > 0 ? (
          sortedAndFilteredList.map((article, index) => (
            <ArticleCard article={article} key={article.name + index} />
          ))
        ) : (
          <Text as="h2">Keine Ergebnisse</Text>
        )}
      </ProductGrid>
      <Pagination
        pageIndex={pageIndex}
        pageNumber={pageIndex + 1}
        toNextPage={handleNextPage}
        toPrevPage={handlePrevPage}
        totalPages={totalPages}
        isBottom={true}
      />
    </Box>
  )
}

export default ArticleFeed
