/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { theme } from "../../theme/theme"
import Button from "./primitives/Button"

type Props = {
  bgColor?: string
  textColor?: string
  label: string
  icon?: ReactNode
  clickFunc?: () => void
  variant?: string
}

const StyledButton = ({
  bgColor = theme.colors.primary,
  textColor = theme.colors.textInverted,
  label,
  icon,
  clickFunc,
  variant = "solid",
}: Props) => {
  return (
    <Button
      onClick={clickFunc}
      css={{
        background: variant === "solid" ? bgColor : "transparent",
        color: textColor,
        border: variant === "solid" ? "none" : `1px solid ${textColor}`,
      }}
    >
      {icon}
      {label}
    </Button>
  )
}

export default StyledButton
