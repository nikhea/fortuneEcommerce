import React, { FC } from "react";

export type IProductPagination = {
  pageNumber: number;
  totalPages: number;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
  setPageNumber: (number: number) => void;
};
const ProductPagination: FC<IProductPagination> = ({
  pageNumber,
  totalPages,
  handlePreviousClick,
  handleNextClick,
  setPageNumber,
}) => {
  return (
    <div>
      <button onClick={handlePreviousClick} disabled={pageNumber === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        if (
          page === 1 ||
          page === totalPages ||
          (page >= pageNumber - 2 && page <= pageNumber + 2)
        ) {
          return (
            <button
              key={page}
              onClick={() => setPageNumber(page)}
              disabled={pageNumber === page}
            >
              {page}
            </button>
          );
        } else if (page === pageNumber - 3 || page === pageNumber + 3) {
          return <span key={page}>...</span>;
        }
        return null;
      })}
      <button onClick={handleNextClick} disabled={pageNumber === totalPages}>
        Next
      </button>
    </div>
  );
};

export default ProductPagination;
