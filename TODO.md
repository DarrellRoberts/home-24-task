## ToDO

- Create a unit test to test the filter and sorting functions on the ArticleFeed component. I would test to make sure that it always returns an array and that the sorting functions sort from high to low, or low to high, where appropriate.

- Create an e2e test for the product feed so that the search terms matches the relevant products. I did try to do this by adding a dynamic product test id to the Card component, but the test kept failing and I ran out of time.

- I would have liked to create more features to improve the UX. For example, creating an autocomplete for the searchbar by using a static array of ten items with common labels ( such as "esszimmer"). Also I did want to alphabeticised the category list in the Sidebar, whereby it would only show the first letter of the product. I would do this by creating a function that would take the first letter, i.e. string[0], of each product, pushing it into a new array, filtering to unique values only, and then to have a submenu when the user hovers/clicks on each letter, showing the relevant products.
