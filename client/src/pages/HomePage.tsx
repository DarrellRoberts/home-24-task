import FooterHome from "../components/footer/FooterHome"
import HeaderHome from "../components/header/HeaderHome"
import SidebarHome from "../components/sidebar/SidebarHome"
import useArticleFetch from "../hooks/useArticleFetch"
import { GET_ARTICLES_QUERY } from "../queries/articlesQuery"
import { useState } from "react"
import Layout from "../components/ui/Layout"
import ArticleHome from "../components/article/ArticleHome"

const HomePage = () => {
  const [searchbar, setSearchbar] = useState<string>("")

  const { articles, isPending, error } = useArticleFetch(
    "http://localhost:3001/graphql",
    GET_ARTICLES_QUERY
  )

  return (
    <Layout>
      <HeaderHome setSearchbar={setSearchbar} searchbar={searchbar} />
      {/* {isPending && (
        <>
          <SidebarHome setSearchbar={setSearchbar} />
          <ArticleSkeleton />
        </>
      )}{" "} */}
      <SidebarHome setSearchbar={setSearchbar} />
      {error !== null && (
        <>
          <h1>Unable to fetch the product details. Please try again later</h1>
        </>
      )}{" "}
      {articles && !isPending && (
        <>
          <SidebarHome
            categories={articles.childrenCategories}
            setSearchbar={setSearchbar}
          />
          <ArticleHome
            categories={articles}
            searchbar={searchbar}
            setSearchbar={setSearchbar}
          />
        </>
      )}
      <FooterHome />
    </Layout>
  )
}

export default HomePage
