/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { breakpoints, colors, font, fontSize } from "../../theme"

type Props = {
  bgColor?: string
  textColor?: string
  label: string
  icon?: ReactNode
  clickFunc?: () => void
  variant?: string
}

const Button = ({
  bgColor = colors.primary,
  textColor = colors.textInverted,
  label,
  icon,
  clickFunc,
  variant = "solid",
}: Props) => {
  return (
    <button
      onClick={clickFunc}
      css={{
        background: variant === "solid" ? bgColor : "transparent",
        color: textColor,
        border: variant === "solid" ? "none" : `1px solid ${textColor}`,
        borderRadius: "10px",
        padding: "15px 32px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: fontSize.md,
        cursor: "pointer",
        fontFamily: font.main,
        fontWeight: 800,
        "&:active": {
          transform: "scale(0.85)",
          background: variant === "outline" ? textColor : "auto",
        },
        "&:hover": {
          color: colors.background,
          background: variant === "outline" ? textColor : "auto",
        },
        [breakpoints.sm]: {
          padding: "1rem 0",
        },
      }}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button
