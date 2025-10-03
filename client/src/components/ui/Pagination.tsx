/** @jsxImportSource @emotion/react */

type Props = {
  pageIndex: number
  pageNumber: number
  toNextPage: () => void
  toPrevPage: () => void
  totalPages: number
}

const Pagination = ({
  pageNumber,
  pageIndex,
  toNextPage,
  toPrevPage,
  totalPages,
}: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "150px",
      }}
    >
      <h2
        onClick={() => toPrevPage()}
        css={{
          opacity: pageIndex !== 0 ? "1" : "0",
          cursor: pageIndex !== 0 ? "pointer" : "default",
        }}
      >
        Prev
      </h2>
      <h2>
        Seite {pageNumber}/{totalPages}
      </h2>
      <h2
        onClick={() => toNextPage()}
        css={{
          opacity: pageNumber !== totalPages ? "1" : "0",
          cursor: pageNumber !== totalPages ? "pointer" : "default",
        }}
      >
        Next
      </h2>
    </div>
  )
}

export default Pagination
