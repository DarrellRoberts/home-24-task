import styled from "@emotion/styled"
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  system,
} from "styled-system"

const customStyles = system({
  filter: true,
  transition: true,
})

const Box = styled("div")(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  customStyles
)

export default Box
