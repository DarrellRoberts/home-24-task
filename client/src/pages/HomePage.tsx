import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import ArticleFeed from "../components/article/ArticleFeed"
import SidebarSkeleton from "../components/sidebar/SidebarSkeleton"
import ArticleSkeleton from "../components/article/ArticleSkeleton"
import useArticleFetch from "../hooks/useArticleFetch"
import { GET_ARTICLES_QUERY } from "../queries/articlesQuery"
import { useState } from "react"

const HomePage = () => {
  const [searchbar, setSearchbar] = useState<string>("")

  const { articles, isPending, error } = useArticleFetch(
    "http://localhost:3001/graphql",
    GET_ARTICLES_QUERY
  )

  return (
    <div className="page">
      <Header setSearchbar={setSearchbar} searchbar={searchbar} />
      {isPending && (
        <>
          <SidebarSkeleton />
          <ArticleSkeleton />
        </>
      )}{" "}
      {error !== null && (
        <>
          <h1>Unable to fetch the product details. Please try again later</h1>
          <SidebarSkeleton />
          <ArticleSkeleton />
        </>
      )}{" "}
      {articles && (
        <>
          <Sidebar
            categories={articles.childrenCategories}
            setSearchbar={setSearchbar}
          />
          <ArticleFeed
            categories={articles}
            searchbar={searchbar}
            setSearchbar={setSearchbar}
          />
        </>
      )}
      <Footer />
    </div>
  )
}

export default HomePage
