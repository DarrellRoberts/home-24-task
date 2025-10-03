/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"
import { breakpoints, colors } from "../../theme"

type Props = {
  label: string
  radioName: string
  checkedColor: string
  setter: Dispatch<React.SetStateAction<string>>
  value: string
  priceIndex: string
}

const Radio = ({
  label,
  radioName,
  checkedColor,
  setter,
  value,
  priceIndex,
}: Props) => {
  return (
    <label
      css={{
        [breakpoints.sm]: {
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <div
        css={{
          accentColor: checkedColor,
          border: `1px solid ${checkedColor}`,
          padding: "1rem",
          borderRadius: "10px",
          background: priceIndex === value ? colors.primary : "transparent",
          color: priceIndex === value ? colors.background : colors.primary,
          cursor: "pointer",
          "&:hover": {
            background:
              priceIndex !== value ? colors.backgroundAccented : colors.primary,
          },
          [breakpoints.sm]: {
            width: "50%",
          },
        }}
      >
        {label}
        <input
          type="radio"
          name={radioName}
          value={value}
          onChange={() => setter(value)}
          defaultChecked={value === priceIndex}
        />
      </div>
    </label>
  )
}

export default Radio
