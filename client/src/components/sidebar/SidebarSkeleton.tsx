import { ChildCategory } from "../../types/types"

type Props = {
  categories: ChildCategory
}

const SidebarSkeleton = () => {
  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
    </div>
  )
}

export default SidebarSkeleton
