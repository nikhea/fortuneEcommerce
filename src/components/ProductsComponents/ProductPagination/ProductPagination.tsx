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
    <div className="flex justify-center text-center space-x-2">
      <button
        onClick={handlePreviousClick}
        className={`${
          pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={pageNumber === 1}
      >
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
              className={`${page === pageNumber ? "text-primary" : ""}`}
            >
              {page}
            </button>
          );
        } else if (page === pageNumber - 3 || page === pageNumber + 3) {
          return <span key={page}>...</span>;
        }
        return null;
      })}
      <button
        className={`${
          pageNumber === totalPages ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handleNextClick}
        disabled={pageNumber === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default ProductPagination;
