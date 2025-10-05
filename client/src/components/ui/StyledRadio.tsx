import { Dispatch } from "react"
import { RadioLabel, RadioWrapper, RadioInput } from "./primitives/Radio"

type Props = {
  label: string
  radioName: string
  checkedColor: string
  setter: Dispatch<React.SetStateAction<string>>
  value: string
  priceIndex: string
}

const StyledRadio = ({
  label,
  radioName,
  checkedColor,
  setter,
  value,
  priceIndex,
}: Props) => {
  const isChecked = value === priceIndex

  return (
    <RadioLabel as="label" htmlFor={`${radioName}-${value}`}>
      <RadioWrapper
        $isChecked={isChecked}
        $checkedColor={checkedColor}
        p={4}
        onClick={() => setter(value)}
      >
        {label}

        <RadioInput
          id={`${radioName}-${value}`}
          type="radio"
          name={radioName}
          value={value}
          onChange={() => setter(value)}
          defaultChecked={isChecked}
        />
      </RadioWrapper>
    </RadioLabel>
  )
}

export default StyledRadio
