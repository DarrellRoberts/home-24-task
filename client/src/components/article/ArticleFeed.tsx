/** @jsxImportSource @emotion/react */

import ArticleCard from "./ArticleCard"
import { type Category } from "../../types/types"
import { Dispatch, useMemo, useState } from "react"
import ArticleFilters from "./ArticleFilters"
import ArticleSelect from "./ArticleSelect"
import Button from "../ui/Button"
import Pagination from "../ui/Pagination"
import Icon from "../ui/Icon"
import { breakpoints, colors } from "../../theme"
import ProductGrid from "../ui/ProductGrid"

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
    <div>
      <h1>
        {categories?.name}
        <small>
          {" "}
          ({sortedAndFilteredList.length}/{totalItems})
        </small>
      </h1>
      <div
        css={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          paddingBottom: "2rem",
          [breakpoints.sm]: {
            flexDirection: "column",
            gap: "1rem",
          },
          [breakpoints.md]: {
            display: "grid",

            gridTemplateRows: "auto auto",
            gap: "1rem",
            alignContent: "center",
            justifyItems: "center",
          },
        }}
      >
        <div
          css={{
            paddingTop: "34px",
            [breakpoints.md]: {
              gridColumn: "span 2",
            },
          }}
        >
          <Button
            label="Kategorien"
            textColor={colors.primary}
            variant="outline"
            clickFunc={() => setShowSidebar(true)}
            icon={<Icon icon={"arrowLeft"} />}
          />
        </div>

        <ArticleFilters priceIndex={priceIndex} setPriceIndex={setPriceIndex} />
        <ArticleSelect
          setSortedValue={setSortedValue}
          sortedValue={sortedValue}
        />
      </div>
      {submittedSearch && (
        <div>
          <h2>Ergebnisse für: {submittedSearch}</h2>
          <Button
            label="Zurücksetzen"
            clickFunc={() => setSubmittedSearch("")}
          />
        </div>
      )}
      <ProductGrid productLength={sortedAndFilteredList.length}>
        {sortedAndFilteredList.length > 0 ? (
          sortedAndFilteredList.map((article, index) => (
            <ArticleCard article={article} key={article.name + index} />
          ))
        ) : (
          <h2>Keine Ergebnisse</h2>
        )}
      </ProductGrid>
      <Pagination
        pageIndex={pageIndex}
        pageNumber={pageIndex + 1}
        toNextPage={handleNextPage}
        toPrevPage={handlePrevPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default ArticleFeed
