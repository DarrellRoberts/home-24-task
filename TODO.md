## ToDO

### 1. Testing

- Create a unit test to test the filter and sorting functions on the ArticleFeed component. I would test to make sure that it always returns an array and that the sorting functions sort from high to low, or low to high, where appropriate.
- Create an e2e test for the product feed to verify that the search terms return the relevant products. I did try to do this by adding a dynamic product test ID to the Card component, but the test kept failing and I ran out of time.

### 2. User Experience

- **Search Autocomplete:** Implement an autocomplete feature for the search bar using a static array of common labels (e.g., "esszimmer") to guide the user and improve search speed.
- **Alphabetical Category Index:** Use an alphabetical index for large lists in the category Sidebar component. This would involve extracting the first letter of each unique category, displaying only those letters, and showing a relevant product submenu on hover/click. 
