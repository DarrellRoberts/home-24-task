import styled from "@emotion/styled"
import { layout, color, position, zIndex, compose } from "styled-system"
import Box from "./Box"

export const SidebarBackdrop = styled(Box)<{ $showSidebar: boolean }>(
  compose(layout, position, zIndex, color),

  {
    position: "fixed",
    top: 0,
    transition: "background 0.5s ease-in-out",
  },

  ({ $showSidebar }) => ({
    background: $showSidebar ? "#00000072" : "transparent",
    width: $showSidebar ? "100%" : "0vw",
    height: $showSidebar ? "100vh" : "0%",
    zIndex: $showSidebar ? 1000 : 0,
  })
)

export const SidebarContent = styled(Box)<{ $showSidebar: boolean }>(
  compose(layout, position, color),

  {
    position: "absolute",
    width: "300px",
    height: "100%",
    overflow: "hidden",
    transition: "transform 0.25s ease-in-out, opacity 0.25s ease-in-out",
  },

  ({ $showSidebar, theme }) => ({
    background: theme.colors.backgroundAccented,
    color: theme.colors.text,

    transform: $showSidebar ? "translateX(0)" : "translateX(-300px)",
    opacity: $showSidebar ? "1" : "0",
  })
)

export const ScrollArea = styled(Box)({
  height: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
})

export const CloseButtonWrapper = styled(Box)({
  float: "right",
  cursor: "pointer",
})
