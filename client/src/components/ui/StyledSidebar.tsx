import { Dispatch, ReactNode } from "react"
import {
  SidebarBackdrop,
  SidebarContent,
  ScrollArea,
  CloseButtonWrapper,
} from "./primitives/Sidebar"
import Icon from "./Icon"

type Props = {
  children: ReactNode
  showSidebar: boolean
  setShowSidebar: Dispatch<React.SetStateAction<boolean>>
}

const StyledSidebar = ({ children, showSidebar, setShowSidebar }: Props) => {
  return (
    <SidebarBackdrop
      onClick={() => setShowSidebar(false)}
      $showSidebar={showSidebar}
    >
      <SidebarContent
        $showSidebar={showSidebar}
        onClick={(e: Event) => e.stopPropagation()}
        pl={3}
      >
        <ScrollArea>
          <CloseButtonWrapper onClick={() => setShowSidebar(false)}>
            <Icon icon="xMark" />
          </CloseButtonWrapper>

          {children}
        </ScrollArea>
      </SidebarContent>
    </SidebarBackdrop>
  )
}

export default StyledSidebar
