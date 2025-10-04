import { Dispatch, useState } from "react"
import {
  SelectContainer,
  SelectButton,
  ArrowIcon,
  OptionsList,
  OptionItem,
  HiddenSelect,
} from "./primitives/SelectMenu"
import Box from "./primitives/Box"

type Props = {
  value: string
  setter: Dispatch<React.SetStateAction<string>>
  options: { value: string; label: string }[]
}

const SelectMenu = ({ setter, value, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (newValue: string) => {
    setter(newValue)
    setIsOpen(false)
  }

  const selectedLabel = options.find((opt) => opt.value === value)?.label

  return (
    <SelectContainer>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        <Box>{selectedLabel}</Box>
        <ArrowIcon $isOpen={isOpen}>▼</ArrowIcon>
      </SelectButton>

      {isOpen && (
        <OptionsList>
          {options.map((option) => {
            const isSelected = option.value === value

            return (
              <OptionItem
                key={option.value}
                onClick={() => handleSelect(option.value)}
                $isSelected={isSelected}
              >
                {option.label}
              </OptionItem>
            )
          })}
        </OptionsList>
      )}
      <HiddenSelect value={value} />
    </SelectContainer>
  )
}

export default SelectMenu
