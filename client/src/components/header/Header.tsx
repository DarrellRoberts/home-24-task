import { Dispatch } from "react"

type Props = {
  setSearchbar: Dispatch<React.SetStateAction<string>>
  searchbar: string
}

const Header = ({ searchbar, setSearchbar }: Props) => {
  return (
    <div className="header">
      <strong>home24</strong>
      <input
        placeholder={"Search"}
        value={searchbar}
        onChange={(e) => setSearchbar(e.target.value)}
      />
    </div>
  )
}

export default Header
