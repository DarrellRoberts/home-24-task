import ArticleCard from "./ArticleCard"
import { type Category } from "../../types/types"
import { Dispatch, useMemo, useState } from "react"

type Props = {
  categories: Category
  searchbar: string
  setSearchbar: Dispatch<React.SetStateAction<string>>
}

const ArticleFeed = ({ categories, searchbar, setSearchbar }: Props) => {
  const [isLow, setIsLow] = useState<boolean>(false)
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

      if (isLow) {
        return priceA - priceB
      } else {
        return priceB - priceA
      }
    })

    const startIndex = currentPage && currentPage * itemsPerPage
    const endIndex = itemsPerPage * (currentPage + 1)
    const paginatedList = sortedList?.slice(startIndex, endIndex)

    return paginatedList
  }, [searchbar, isLow, categories, priceIndex, currentPage])

  return (
    <div className="content">
      <h1>
        {categories?.name}
        <small> ({sortedAndFilteredList.length})</small>
      </h1>
      <label>Less than 1000</label>
      <input
        type="radio"
        name="price-index"
        onChange={() => setPriceIndex("low")}
      />
      <label>Less than 5000</label>
      <input
        type="radio"
        name="price-index"
        onChange={() => setPriceIndex("medium")}
      />
      <label>More than 5000</label>
      <input
        type="radio"
        name="price-index"
        onChange={() => setPriceIndex("high")}
      />
      <label>All</label>
      <input
        type="radio"
        name="price-index"
        onChange={() => setPriceIndex("all")}
      />
      <label htmlFor="cost">Sortieren:</label>
      <select
        className="sort-cost-selector"
        name="cost"
        onChange={() => {
          setIsLow(!isLow)
        }}
      >
        <option value="low">Höchster Preis</option>
        <option value="high">Niedrigster Preis</option>
      </select>
      {searchbar && (
        <div>
          <span>Showing results for: {searchbar}</span>
          <button onClick={() => setSearchbar("")}>Clear results</button>
        </div>
      )}
      <div className="articles">
        {sortedAndFilteredList.length > 0 ? (
          sortedAndFilteredList.map((article) => (
            <ArticleCard article={article} />
          ))
        ) : (
          <span>No results found</span>
        )}
      </div>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  )
}

export default ArticleFeed
