import "@emotion/react"
import { theme } from "../theme/index"

type CustomTheme = typeof theme

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
