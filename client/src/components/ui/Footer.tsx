/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import styled from "@emotion/styled"
import Box from "./primitives/Box"
import { breakpoints, colors } from "../../theme"

const FooterWrapper = styled(Box)`
  width: 100%;
`

const WaveContainer = styled(Box)`
  width: 100%;
`

const WaveSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(192% + 1.3px);
  height: 123px;
  ${breakpoints.sm} {
    width: auto;
  }
`

type Props = {
  children: ReactNode
}

const Footer = ({ children }: Props) => {
  return (
    <FooterWrapper
      as="footer"
      height="65px"
      pt={6}
      position="relative"
      overflow="hidden"
    >
      <WaveContainer position="absolute" bottom={0} left={0} lineHeight={0}>
        <WaveSVG
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            css={{ fill: colors.primary }}
          ></path>
        </WaveSVG>
      </WaveContainer>
      {children}
    </FooterWrapper>
  )
}

export default Footer
