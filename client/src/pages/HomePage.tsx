/** @jsxImportSource @emotion/react */

import FooterHome from "../components/footer/FooterHome"
import HeaderHome from "../components/header/HeaderHome"
import SidebarHome from "../components/sidebar/SidebarHome"
import useArticleFetch from "../hooks/useArticleFetch"
import { GET_ARTICLES_QUERY } from "../queries/articlesQuery"
import { useState } from "react"
import Layout from "../components/ui/Layout"
import ArticleHome from "../components/article/ArticleHome"
import ArticleSkeleton from "../components/article/ArticleSkeleton"
import { breakpoints, fontSize } from "../theme"

const HomePage = () => {
  const [submittedSearch, setSubmittedSearch] = useState<string>("")
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showBlur, setShowBlur] = useState<boolean>(false)

  const { articles, isPending, error } = useArticleFetch(
    "http://localhost:3001/graphql",
    GET_ARTICLES_QUERY
  )

  return (
    <Layout>
      <HeaderHome
        setSubmittedSearch={setSubmittedSearch}
        setShowBlur={setShowBlur}
        showBlur={showBlur}
      />
      {error !== null ? (
        <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <h1
            css={{
              fontSize: fontSize.xl,
              [breakpoints.sm]: { textAlign: "center" },
            }}
          >
            Produktdetails konnten nicht abgerufen werden. Bitte versuchen Sie
            es später erneut.
          </h1>
          <ArticleSkeleton />
        </div>
      ) : null}
      {isPending && !error && (
        <div css={{ display: "flex", flexDirection: "column" }}>
          <h1>Laden...</h1>
          <ArticleSkeleton />
        </div>
      )}
      {articles && !error && !isPending && (
        <>
          <SidebarHome
            setSubmittedSearch={setSubmittedSearch}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            categories={articles?.childrenCategories}
          />
          <div
            css={{
              filter: showBlur ? "blur(0.5rem)" : "blur(0)",
              transition: "filter 0.15s ease-in-out",
            }}
            onClick={() => setShowBlur(false)}
          >
            <ArticleHome
              categories={articles}
              submittedSearch={submittedSearch}
              setSubmittedSearch={setSubmittedSearch}
              setShowSidebar={setShowSidebar}
            />
          </div>
        </>
      )}
      <FooterHome />
    </Layout>
  )
}

export default HomePage
