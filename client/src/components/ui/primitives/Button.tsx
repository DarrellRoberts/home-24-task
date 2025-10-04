import styled from "@emotion/styled"
import { space, color, typography } from "styled-system"

type VariantKey = "solid" | "outline"

const buttonVariants: Record<VariantKey, any> = {
  solid: {
    bg: "primary",
    color: "textInverted",
    border: "none",
    "&:hover, &:active": {
      filter: "brightness(0.9)",
    },
  },

  outline: {
    bg: "transparent",
    color: "primary",
    border: "1px solid",
    borderColor: "primary",
    "&:hover, &:active": {
      color: "textInverted",
      bg: "primary",
    },
  },
}

const ButtonPrimitive = styled("button")(
  space,
  color,
  typography,

  {
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "main",
    fontWeight: 800,
    transition: "all 0.15s ease-in-out",

    "&:active": {
      transform: "scale(0.95)",
    },
    padding: "15px 32px",
  },

  ({ theme, variant = "solid" }) => {
    const key = variant as VariantKey

    return buttonVariants[key] || buttonVariants.solid
  },
  ({ theme }) => ({
    [theme.media.sm]: {
      padding: "1rem 0",
    },
  })
)

export default ButtonPrimitive
