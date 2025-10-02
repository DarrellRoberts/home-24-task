import { css } from "@emotion/react"
import { CustomTheme } from "../types/emotion"

export const componentTheme = (theme: CustomTheme) => css`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textInverted};
`
