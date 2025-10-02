import { useState, useEffect } from "react"
import { Category } from "../types/types"

const useArticleFetch = (url: string, query: string) => {
  const [articles, setArticles] = useState<Category | null>(null)
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null>(null)

  const fetchArticles = async () => {
    try {
      setIsPending(true)
      setError(null)
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })
      if (!response.ok) {
        throw new Error("Unable to fetch articles")
      }
      const result = await response.json()
      setIsPending(false)
      setArticles(result.data.categories[0])
    } catch (err: unknown) {
      setIsPending(false)
      setError(err)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    fetchArticles()
    return () => abortController.abort()
  }, [url, query])

  return { articles, isPending, error }
}

export default useArticleFetch
