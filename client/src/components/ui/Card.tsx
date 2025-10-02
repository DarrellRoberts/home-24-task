/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { colors } from "../../theme"

type Props = {
  bgColor: string
  textColor: string
  imgSrc?: string
  header: string
  footer: string
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
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        background: bgColor,
        boxShadow: `0px 5px 11px -3px ${colors.neutral}`,
        width: "300px",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <div
        css={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "200px",
          borderRadius: "10px",
        }}
      />
      <h2 css={{ color: textColor, fontSize: "1.25rem" }}>{header}</h2>
      <h2 css={{ color: textColor, fontSize: "1rem" }}>{footer}</h2>
      {button}
    </div>
  )
}

export default Card
