import styled from "@emotion/styled"
import Box from "./Box"
import { theme } from "../../../theme/theme"

export const Footer = styled(Box)`
  width: 100%;
`

export const WaveContainer = styled(Box)`
  width: 100%;
`

export const WaveSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(192% + 1.3px);
  height: 123px;
  ${theme.media.sm} {
    width: auto;
  }
`
