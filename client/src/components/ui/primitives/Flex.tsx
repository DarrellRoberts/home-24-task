import styled from "@emotion/styled"
import Box from "./Box"
import { flexbox, grid } from "styled-system"

const Flex = styled(Box)(
  {
    display: "flex",
    width: "100%",
  },
  flexbox,
  grid
)

export default Flex
