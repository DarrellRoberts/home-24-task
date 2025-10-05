import { ReactNode } from "react"
import Link from "./primitives/Link"

type Props = {
  url: string
  children: ReactNode
}

const StyledLink = ({ url, children }: Props) => {
  return <Link href={`${url}`}>{children}</Link>
}

export default StyledLink
