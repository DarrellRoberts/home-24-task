/** @jsxImportSource @emotion/react */

import { Divider } from "./primitives/Divider"

type Props = {
  color: string
  borderStyle: string
  thickness: string
}

const StyledDivider = ({ color, borderStyle, thickness }: Props) => {
  return <Divider css={{ border: `${borderStyle} ${thickness} ${color}` }} />
}

export default StyledDivider
