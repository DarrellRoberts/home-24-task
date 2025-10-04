import styled from "@emotion/styled"
import Box from "./Box"
import { flexbox } from "styled-system"

const Flex = styled(Box)(
  {
    display: "flex",
  },
  flexbox
)

export default Flex
