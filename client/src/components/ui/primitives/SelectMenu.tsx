import styled from "@emotion/styled"
import {
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  typography,
  compose,
  zIndex,
} from "styled-system"
import Box from "./Box"

export const SelectContainer = styled(Box)(
  compose(position, typography),
  (props) => ({
    position: "relative",
  })
)

export const SelectButton = styled(Box)(
  compose(border, layout, space, color, flexbox),
  (props) => ({
    border: `1px solid ${props.theme.colors.text}`,
    width: "300px",
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: props.theme.colors.background,
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })
)

export const ArrowIcon = styled("span")<{ $isOpen: boolean }>`
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`
export const OptionsList = styled(Box)(
  compose(position, border, color, zIndex),
  (props) => ({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    border: `1px solid ${props.theme.colors.text}`,
    marginTop: "2px",
    backgroundColor: props.theme.colors.background,
    borderRadius: "4px",
  })
)

export const OptionItem = styled(Box)<{ $isSelected: boolean }>`
  padding: 8px 12px;
  cursor: pointer;

  ${({ $isSelected, theme }) => `
    background-color: ${$isSelected ? theme.colors.primary : "transparent"};
    color: ${$isSelected ? theme.colors.textInverted : theme.colors.text};

    &:hover {
      background-color: ${
        $isSelected ? theme.colors.primary : theme.colors.backgroundAccented
      };
    }
  `}
`
export const HiddenSelect = styled("select")({
  display: "none",
})
