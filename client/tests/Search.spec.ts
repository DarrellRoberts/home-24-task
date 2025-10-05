import test, { expect } from "@playwright/test"

test("should searchbar accept search queries and have working enter functionality", async ({
  page,
}) => {
  await page.goto("/")

  const searchInput = page.getByTestId("search-input")
  await expect(searchInput).toBeVisible()

  const searchTerm = "esszimmer"
  await searchInput.fill(searchTerm, { force: true })

  await searchInput.press("Enter")
})
