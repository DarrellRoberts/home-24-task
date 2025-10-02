/** @jsxImportSource @emotion/react */
import { Dispatch, useState } from "react"
import { colors, font } from "../../theme"

type Props = {
  value: string
  setter: Dispatch<React.SetStateAction<string>>
  options: { value: string; label: string }[]
}

const SelectMenu = ({ setter, value, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (value: string) => {
    setter(value)
    setIsOpen(false)
  }

  const selectedLabel = options.find((opt) => opt.value === value)?.label

  return (
    <div
      css={{
        position: "relative",
        fontFamily: font.main,
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        css={{
          border: `1px solid ${colors.text}`,
          width: "300px",
          padding: "8px 12px",
          cursor: "pointer",
          backgroundColor: colors.background,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {selectedLabel}
        <span
          css={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div
          css={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 10,
            border: `1px solid ${colors.text}`,
            marginTop: "2px",
            backgroundColor: colors.background,
            borderRadius: "4px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              css={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor:
                  option.value === value ? colors.primary : "transparent",
                color:
                  option.value === value ? colors.textInverted : colors.text,
                "&:hover": {
                  backgroundColor:
                    option.value === value
                      ? colors.primary
                      : colors.backgroundInverted,
                },
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      <select value={value} css={{ display: "none" }}></select>
    </div>
  )
}

export default SelectMenu
