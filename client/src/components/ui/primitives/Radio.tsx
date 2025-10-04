import styled from "@emotion/styled"
import Box from "./Box"
import { space, border } from "styled-system"

export const RadioLabel = styled(Box)((props) => ({
  [props.theme.media.sm]: {
    display: "flex",
    justifyContent: "center",
  },
}))

export const RadioWrapper = styled(Box)<{
  $isChecked: boolean
  $checkedColor: string
}>(
  space,
  border,

  ({ $isChecked, $checkedColor, theme }) => ({
    accentColor: $checkedColor,
    border: `1px solid ${$checkedColor}`,
    borderRadius: "10px",
    padding: "1rem",
    background: $isChecked ? theme.colors.primary : "transparent",
    color: $isChecked ? theme.colors.background : theme.colors.primary,
    cursor: "pointer",
    "&:hover": {
      background: $isChecked
        ? theme.colors.primary
        : theme.colors.backgroundAccented,
    },

    [theme.media.sm]: {
      width: "50%",
    },
  })
)

export const RadioInput = styled("input")({
  opacity: 0,
  width: 0,
  height: 0,
  overflow: "hidden",
  position: "absolute",
  pointerEvents: "none",
})
