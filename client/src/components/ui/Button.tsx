/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { colors, font } from "../../theme"

type Props = {
  bgColor?: string
  textColor?: string
  label: string
  icon?: ReactNode
  clickFunc?: () => void
}

const Button = ({
  bgColor = colors.primary,
  textColor = colors.textInverted,
  label,
  icon,
  clickFunc,
}: Props) => {
  return (
    <button
      onClick={clickFunc}
      css={{
        background: bgColor,
        color: textColor,
        border: "none",
        borderRadius: "10px",
        padding: "15px 32px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "1.2rem",
        cursor: "pointer",
        fontFamily: font.main,
        fontWeight: 800,
        "&:active": {
          transform: "scale(0.85)",
        },
        "&:hover": {
          color: colors.background,
        },
      }}
    >
      {label}
      {icon}
    </button>
  )
}

export default Button
