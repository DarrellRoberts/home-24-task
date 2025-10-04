import Box from "./primitives/Box"
import styled from "@emotion/styled"

type Props = {
  pageIndex: number
  pageNumber: number
  toNextPage: () => void
  toPrevPage: () => void
  totalPages: number
}

const NavText = styled(Box)<{ $disabled: boolean }>(
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
}: Props) => {
  const isPrevDisabled = pageIndex === 0
  const isNextDisabled = pageNumber === totalPages

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="150px"
    >
      <NavText
        as="h2"
        onClick={!isPrevDisabled ? toPrevPage : undefined}
        $disabled={isPrevDisabled}
      >
        Prev
      </NavText>

      <Box as="h2">
        Seite {pageNumber}/{totalPages}
      </Box>

      <NavText
        as="h2"
        onClick={!isNextDisabled ? toNextPage : undefined}
        $disabled={isNextDisabled}
      >
        Next
      </NavText>
    </Box>
  )
}

export default Pagination
