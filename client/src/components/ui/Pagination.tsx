import styled from "@emotion/styled"
import Text from "./primitives/Text"
import Flex from "./primitives/Flex"
import Icon from "./Icon"

type Props = {
  pageIndex: number
  pageNumber: number
  toNextPage: () => void
  toPrevPage: () => void
  totalPages: number
  isBottom?: boolean
}

const NavText = styled(Flex)<{ $disabled: boolean }>(
  {
    transition: "opacity 0.2s ease-in-out",
    userSelect: "none",
  },

  (props) => ({
    opacity: props.$disabled ? "0" : "1",
    cursor: props.$disabled ? "default" : "pointer",
  })
)

const Pagination = ({
  pageNumber,
  pageIndex,
  toNextPage,
  toPrevPage,
  totalPages,
  isBottom,
}: Props) => {
  const isPrevDisabled = pageIndex === 0
  const isNextDisabled = pageNumber === totalPages

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height={isBottom ? "150px" : "auto"}
    >
      <NavText
        onClick={!isPrevDisabled ? toPrevPage : undefined}
        $disabled={isPrevDisabled}
      >
        <Icon icon="chevL" />
        <Text as="h3">Zurück</Text>
      </NavText>

      <Flex justifyContent="center">
        <Text as="h3">
          Seite {pageNumber}/{totalPages}
        </Text>
      </Flex>

      <NavText
        onClick={!isNextDisabled ? toNextPage : undefined}
        $disabled={isNextDisabled}
        justifyContent="end"
      >
        <Text as="h3">Weiter</Text>
        <Icon icon="chevR" />
      </NavText>
    </Flex>
  )
}

export default Pagination
