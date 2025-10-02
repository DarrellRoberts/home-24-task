/** @jsxImportSource @emotion/react */

import { Dispatch } from "react"

type Props = {
  label: string
  radioName: string
  checkedColor: string
  setter: Dispatch<React.SetStateAction<string>>
  value: string
}

const Radio = ({ label, radioName, checkedColor, setter, value }: Props) => {
  return (
    <div
      css={{
        accentColor: checkedColor,
        border: `1px solid ${checkedColor}`,
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <label>{label}</label>
      <input type="radio" name={radioName} onChange={() => setter(value)} />
    </div>
  )
}

export default Radio
