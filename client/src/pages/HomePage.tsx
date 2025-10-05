/** @jsxImportSource @emotion/react */

import FooterHome from "../components/footer/FooterHome"
import HeaderHome from "../components/header/HeaderHome"
import SidebarHome from "../components/sidebar/SidebarHome"
import useArticleFetch from "../hooks/useArticleFetch"
import { GET_ARTICLES_QUERY } from "../queries/articlesQuery"
import { useEffect, useState } from "react"
import Layout from "../components/ui/Layout"
import ArticleHome from "../components/article/ArticleHome"
import ArticleSkeleton from "../components/article/ArticleSkeleton"
import Box from "../components/ui/primitives/Box"
import Flex from "../components/ui/primitives/Flex"
import Text from "../components/ui/primitives/Text"

const HomePage = () => {
  const [submittedSearch, setSubmittedSearch] = useState<string>("")
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showBlur, setShowBlur] = useState<boolean>(false)

  const { articles, isPending, error } = useArticleFetch(
    "http://localhost:3001/graphql",
    GET_ARTICLES_QUERY
  )

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow

    if (showBlur) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = bodyOverflow
      document.documentElement.style.overflow = bodyOverflow
    }
  }, [showBlur])

  return (
    <Layout>
      <HeaderHome
        setSubmittedSearch={setSubmittedSearch}
        setShowBlur={setShowBlur}
        showBlur={showBlur}
        isDisabled={!articles}
      />
      {error !== null ? (
        <Flex flexDirection="column">
          <Text as="h1" fontSize={[4]} textAlign={"center"}>
            Produktdetails konnten nicht abgerufen werden. Bitte versuchen Sie
            es später erneut.
          </Text>
          <ArticleSkeleton />
        </Flex>
      ) : null}
      {isPending && !error && (
        <Flex flexDirection="column">
          <Text as="h1" fontSize={[4]} textAlign="center">
            Wird geladen...
          </Text>
          <ArticleSkeleton />
        </Flex>
      )}
      {articles && !error && !isPending && (
        <>
          <SidebarHome
            setSubmittedSearch={setSubmittedSearch}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            categories={articles?.childrenCategories}
          />
          <Box
            filter={showBlur ? "blur(0.5rem)" : "blur(0)"}
            transition="filter 0.15s ease-in-out"
            onClick={() => setShowBlur(false)}
          >
            <ArticleHome
              categories={articles}
              submittedSearch={submittedSearch}
              setSubmittedSearch={setSubmittedSearch}
              setShowSidebar={setShowSidebar}
            />
          </Box>
        </>
      )}
      <FooterHome />
    </Layout>
  )
}

export default HomePage
