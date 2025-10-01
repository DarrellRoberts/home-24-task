import { useEffect, useState } from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import ArticleFeed from "../components/article/ArticleFeed"
import { Category } from "../types/types"
import SidebarSkeleton from "../components/sidebar/SidebarSkeleton"
import ArticleSkeleton from "../components/article/ArticleSkeleton"

const HomePage = () => {
  const [articles, setArticles] = useState<Category>()

  const fetchData = () => {
    var xhr = new XMLHttpRequest()

    xhr.open("POST", "http://localhost:3001/graphql")
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.send(
      JSON.stringify({
        query: `{
            categories: productLists(ids: "156126", locale: de_DE) {
              name
              articleCount
              childrenCategories: childrenProductLists {
                list {
                  name
                  urlPath
                }
              }
              categoryArticles: articlesList(first: 50) {
                articles {
                  name
                  variantName
                  prices {
                    currency
                    regular {
                      value
                    }
                  }
                  images(
                    format: WEBP
                    maxWidth: 200
                    maxHeight: 200
                    limit: 1
                  ) {
                    path
                  }
                }
              }
            }
          }`,
      })
    )

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log("response ok")
        setArticles(response.data.categories[0])
      }
    }
  }

  useEffect(() => {
    fetchData()
    console.log(articles)
  }, [])
  return (
    <div className="page">
      <Header />
      {articles?.childrenCategories ? (
        <>
          <Sidebar categories={articles.childrenCategories} />
          <ArticleFeed categories={articles} />
        </>
      ) : (
        <>
          <SidebarSkeleton />
          <ArticleSkeleton />
        </>
      )}
      <Footer />
    </div>
  )
}

export default HomePage
