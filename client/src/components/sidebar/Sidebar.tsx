import { ChildCategory } from "../../types/types"
import { Dispatch, useMemo } from "react"

type Props = {
  categories: ChildCategory
  setSearchbar: Dispatch<React.SetStateAction<string>>
}

const Sidebar = ({ categories, setSearchbar }: Props) => {
  const sortedList = useMemo(() => {
    return categories.list.sort((a, b) => a.name.localeCompare(b.name))
  }, [categories])

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <ul>
        {sortedList.map((category) => (
          <li key={category.name} onClick={() => setSearchbar(category.name)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
