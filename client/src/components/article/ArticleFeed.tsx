/** @jsxImportSource @emotion/react */

import ArticleCard from "./ArticleCard"
import { type Category } from "../../types/types"
import { Dispatch, useMemo, useState } from "react"
import ArticleFilters from "./ArticleFilters"
import SelectMenu from "../ui/SelectMenu"
import ArticleSelect from "./ArticleSelect"
import Button from "../ui/Button"

type Props = {
  categories: Category
  searchbar: string
  setSearchbar: Dispatch<React.SetStateAction<string>>
}

const ArticleFeed = ({ categories, searchbar, setSearchbar }: Props) => {
  const [sortedValue, setSortedValue] = useState<string>("low")
  const [priceIndex, setPriceIndex] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState<number>(0)

  const itemsPerPage = 25

  const sortedAndFilteredList = useMemo(() => {
    const filteredList =
      categories?.categoryArticles?.articles
        .filter((article) => {
          return article.name.toLowerCase().includes(searchbar.toLowerCase())
        })
        .filter((article) => {
          if (priceIndex === "all") {
            return article.name.toLowerCase().includes(searchbar.toLowerCase())
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

    const startIndex = currentPage && currentPage * itemsPerPage
    const endIndex = itemsPerPage * (currentPage + 1)
    const paginatedList = sortedList?.slice(startIndex, endIndex)

    return paginatedList
  }, [searchbar, sortedValue, categories, priceIndex, currentPage])

  return (
    <div className="content">
      <h1>
        {categories?.name}
        <small> ({sortedAndFilteredList.length})</small>
      </h1>
      <ArticleFilters setPriceIndex={setPriceIndex} />
      <ArticleSelect
        setSortedValue={setSortedValue}
        sortedValue={sortedValue}
      />
      {searchbar && (
        <div>
          <h2>Showing results for: {searchbar}</h2>
          <Button label="Zurücksetzen" clickFunc={() => setSearchbar("")} />
        </div>
      )}
      <div
        css={{
          display: sortedAndFilteredList.length > 0 ? "grid" : "flex",
          justifyContent:
            sortedAndFilteredList.length === 0 ? "center" : "auto",
          alingItems: sortedAndFilteredList.length === 0 ? "center" : "auto",
          height: sortedAndFilteredList.length === 0 ? "100vh" : "auto",
          gridGap: "2rem",
          padding: "0 1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        }}
      >
        {sortedAndFilteredList.length > 0 ? (
          sortedAndFilteredList.map((article) => (
            <ArticleCard article={article} />
          ))
        ) : (
          <h2>No results found</h2>
        )}
      </div>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  )
}

export default ArticleFeed
