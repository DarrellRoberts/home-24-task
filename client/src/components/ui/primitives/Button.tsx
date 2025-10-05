import styled from "@emotion/styled"
import { theme } from "../../../theme/theme"

const ButtonPrim = styled.button({
  borderRadius: theme.rounded.light,
  padding: "15px 32px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  fontSize: theme.fontSizes[0],
  fontFamily: theme.fonts.body,
  cursor: "pointer",
  fontWeight: 800,
  "&:active": {
    transform: "scale(0.95)",
  },
  "&:hover": {
    filter: "brightness(1.15)",
  },
  [theme.media.sm]: {
    padding: "1rem 0",
  },
})

export default ButtonPrim
