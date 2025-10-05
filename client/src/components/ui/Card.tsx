/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { theme } from "../../theme/theme"
import { keyframes } from "@emotion/react"
import Flex from "./primitives/Flex"
import Box from "./primitives/Box"
import Text from "./primitives/Text"

type Props = {
  bgColor?: string
  textColor?: string
  imgSrc?: string
  header?: string
  footer?: string
  isSkeleton?: boolean
  button?: ReactNode
}

const Card = ({
  imgSrc,
  header,
  footer,
  isSkeleton,
  button,
  bgColor,
  textColor,
}: Props) => {
  const pulsate = keyframes`
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 0.1;
  }
`
  return (
    <Flex
      flexDirection="column"
      bg={bgColor}
      css={{
        background: bgColor,
        boxShadow: `0px 5px 11px -3px ${theme.colors.neutral}`,
        width: "auto",
        aspectRatio: "1/1",
        padding: "1rem",
        borderRadius: theme.rounded.light,
        gap: isSkeleton ? "1rem" : "0",
      }}
    >
      <Box
        css={{
          backgroundImage: `url(${imgSrc})`,
          backgroundColor: isSkeleton ? theme.colors.neutral : "transparent",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: isSkeleton ? "350px" : "auto",
          aspectRatio: "1/1",
          borderRadius: theme.rounded.light,
          opacity: isSkeleton ? "0.1" : "1",
          animation: isSkeleton ? `${pulsate} 2s ease-in-out infinite` : "none",
          [theme.media.sm]: {
            height: isSkeleton ? "200px" : "auto",
          },
        }}
      />
      {isSkeleton ? (
        <Flex flexDirection="column" css={{ gap: "1rem" }}>
          <Box
            width={[1 / 2]}
            height="1.5rem"
            bg={theme.colors.neutral}
            css={{
              borderRadius: theme.rounded.light,
              opacity: "0.1",
              animation: `${pulsate} 2s ease-in-out infinite`,
            }}
          />
          <Box
            width={[3 / 4]}
            height="1.5rem"
            bg={theme.colors.neutral}
            css={{
              borderRadius: theme.rounded.light,
              opacity: "0.1",
              animation: `${pulsate} 2s ease-in-out infinite`,
            }}
          />
        </Flex>
      ) : (
        <>
          <Text as="h2" color={textColor} fontSize={theme.fontSizes[1]} p={3}>
            {header}
          </Text>
          <Text
            as="h3"
            color={textColor}
            fontSize={theme.fontSizes[0]}
            p={3}
            css={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {footer}
          </Text>
          {button}
        </>
      )}
    </Flex>
  )
}

export default Card
