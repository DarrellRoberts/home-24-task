import * as React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ArticleHome from "./ArticleHome"
import { Category } from "../../types/types" //

jest.mock("./ArticleFeed", () => () => <div data-testid="article-feed"></div>)
jest.mock("./ArticleSkeleton", () => () => (
  <div data-testid="article-skeleton"></div>
))

const mockDispatch = jest.fn()
const mockCategory: Category = {
  name: "Test Category",
  categoryArticles: { articles: [] },
  articleCount: 5,
  childrenCategories: { list: [{ name: "bade", urlPath: "example.com/bade" }] },
}

const requiredProps = {
  categories: mockCategory,
  submittedSearch: "",
  setSubmittedSearch: mockDispatch,
  setShowSidebar: mockDispatch,
}

const renderHome = (props: any = {}) => {
  return render(
    React.createElement(ArticleHome, { ...requiredProps, ...props })
  )
}

// --- Tests ---

test("1. renders ArticleFeed when categories data is available", () => {
  renderHome()

  expect(screen.getByTestId("article-feed")).toBeInTheDocument()

  expect(screen.queryByTestId("article-skeleton")).not.toBeInTheDocument()
})

test("2. renders ArticleSkeleton when categories data is null/undefined", () => {
  renderHome({ categories: null })

  expect(screen.getByTestId("article-skeleton")).toBeInTheDocument()

  expect(screen.queryByTestId("article-feed")).not.toBeInTheDocument()
})
