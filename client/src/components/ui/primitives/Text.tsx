import styled from "@emotion/styled"
import {
  typography,
  space,
  color,
  LayoutProps,
  TypographyProps,
  SpaceProps,
  ColorProps,
} from "styled-system"

type TextProps = TypographyProps & SpaceProps & ColorProps & LayoutProps

const Text = styled.p<TextProps>(
  {
    margin: 0,
    padding: 0,
  },
  typography,
  space,
  color
)

Text.displayName = "Text"

export default Text
