import { ChildCategory } from "../../types/types"

type Props = {
  categories: ChildCategory
}

const Sidebar = ({ categories }: Props) => {
  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <ul>
        {categories?.list?.map((category) => (
          <li key={category.name}>
            <a href={`/${category.urlPath}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
