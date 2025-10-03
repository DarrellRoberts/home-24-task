/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { breakpoints, colors, fontSize } from "../../theme"
import { keyframes } from "@emotion/react"

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
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        background: bgColor,
        boxShadow: `0px 5px 11px -3px ${colors.neutral}`,
        width: "auto",
        aspectRatio: "1/1",
        padding: "1rem",
        borderRadius: "10px",
        gap: isSkeleton ? "1rem" : "0",
      }}
    >
      <div
        css={{
          backgroundImage: `url(${imgSrc})`,
          backgroundColor: isSkeleton ? colors.neutral : "transparent",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: isSkeleton ? "350px" : "auto",
          aspectRatio: "1/1",
          borderRadius: "10px",
          opacity: isSkeleton ? "0.1" : "1",
          animation: isSkeleton ? `${pulsate} 2s ease-in-out infinite` : "none",
          [breakpoints.sm]: {
            height: isSkeleton ? "200px" : "auto",
          },
        }}
      />
      {isSkeleton ? (
        <div css={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            css={{
              background: colors.neutral,
              borderRadius: "10px",
              width: "50%",
              height: "1.5rem",
              opacity: "0.1",
              animation: `${pulsate} 2s ease-in-out infinite`,
            }}
          />
          <div
            css={{
              background: colors.neutral,
              borderRadius: "10px",
              width: "75%",
              height: "1.5rem",
              opacity: "0.1",
              animation: `${pulsate} 2s ease-in-out infinite`,
            }}
          />
        </div>
      ) : (
        <>
          <h2
            css={{
              color: textColor,
              fontSize: fontSize.md,
            }}
          >
            {header}
          </h2>
          <h2
            css={{
              color: textColor,
              fontSize: fontSize.base,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {footer}
          </h2>
          {button}
        </>
      )}
    </div>
  )
}

export default Card
