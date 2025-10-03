/** @jsxImportSource @emotion/react */

import { Dispatch, ReactNode } from "react"
import { colors } from "../../theme"
import Icon from "./Icon"

type Props = {
  children: ReactNode
  showSidebar: boolean
  setShowSidebar: Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ children, showSidebar, setShowSidebar }: Props) => {
  return (
    <div
      onClick={() => setShowSidebar(false)}
      css={{
        position: "fixed",
        top: 0,
        background: showSidebar ? "#00000072" : "transparent",
        width: showSidebar ? "100%" : "0vw",
        height: showSidebar ? "100vh" : "0%",
        zIndex: showSidebar ? 1000 : 0,
        transition: "background 0.5s ease-in-out",
      }}
    >
      <div
        css={{
          background: colors.backgroundAccented,
          color: colors.text,
          position: "absolute",
          width: "300px",
          transform: showSidebar ? "translateX(0)" : "translateX(-300px)",
          height: "100%",
          opacity: showSidebar ? "1" : "0",
          overflow: "hidden",
          transition: "transform 0.25s ease-in-out",
        }}
      >
        <div
          css={{
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <div
            css={{ float: "right", cursor: "pointer" }}
            onClick={() => setShowSidebar(false)}
          >
            <Icon icon="xMark" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
