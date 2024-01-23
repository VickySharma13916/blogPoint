import React from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const Pagination = ({ pageNumber, totalPages, handlePageClick }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const displayRange = 2;

  const startPage = Math.max(1, pageNumber - displayRange);
  const endPage = Math.min(pages.length, pageNumber + displayRange);

  const renderPages = pages.slice(startPage - 1, endPage);

  const renderPageNumbers = renderPages.map((page) => (
    <a
      key={page}
      onClick={() => handlePageClick(page - 1)}
      className={`${
        pageNumber === page - 1
          ? "bg-red-800 text-white"
          : "text-gray-900 hover:bg-gray-50"
      } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
    >
      {page}
    </a>
  ));

  const renderStartPages = (
    <>
      {renderPageNumbers}
      {totalPages > displayRange * 2 && <span>...</span>}
      {totalPages > displayRange * 2 && (
        <a
          onClick={() => handlePageClick(totalPages - 1)}
          className={`${
            pageNumber === totalPages - 1
              ? "bg-red-800 text-white"
              : "text-gray-900 hover:bg-gray-50"
          } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          {totalPages}
        </a>
      )}
    </>
  );

  const renderMiddlePages = (
    <>
      <a
        onClick={() => handlePageClick(0)}
        className={`${
          pageNumber === 0
            ? "bg-red-800 text-white"
            : "text-gray-900 hover:bg-gray-50"
        } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
      >
        {1}
      </a>
      {pageNumber > displayRange && <span>...</span>}
      {pageNumber > displayRange && renderPageNumbers}
      {pageNumber < totalPages - displayRange && <span>...</span>}
      {pageNumber < totalPages - displayRange && (
        <a
          onClick={() => handlePageClick(totalPages - 1)}
          className={`${
            pageNumber === totalPages - 1
              ? "bg-red-800 text-white"
              : "text-gray-900 hover:bg-gray-50"
          } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          {totalPages}
        </a>
      )}
    </>
  );

  const renderLastPages = (
    <>
      {pageNumber < totalPages - displayRange && (
        <>
          <a
            onClick={() => handlePageClick(0)}
            className={`${
              pageNumber === 0
                ? "bg-red-800 text-white"
                : "text-gray-900 hover:bg-gray-50"
            } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
          >
            {1}
          </a>
          <span>...</span>
        </>
      )}
      {pageNumber < totalPages - displayRange && renderPageNumbers.slice(-1)}{" "}
      {/* Only show the last item from renderPageNumbers */}
      {totalPages > displayRange * 2 && <span>...</span>}
      {totalPages > displayRange * 2 && (
        <a
          onClick={() => handlePageClick(totalPages - 1)}
          className={`${
            pageNumber === totalPages - 1
              ? "bg-red-800 text-white"
              : "text-gray-900 hover:bg-gray-50"
          } relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          {totalPages}
        </a>
      )}
    </>
  );

  return (
    <div className="flex w-full justify-start items-start px-4 py-3 sm:px-6">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          href="#"
          onClick={() => handlePageClick(Math.max(0, pageNumber - 1))}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <BsFillCaretLeftFill className="h-5 w-5" aria-hidden="true" />
        </a>
        {pageNumber <= displayRange && renderStartPages}
        {pageNumber > displayRange &&
          pageNumber < totalPages - displayRange &&
          renderMiddlePages}
        {pageNumber >= totalPages - displayRange && renderLastPages}
        <a
          href="#"
          onClick={() =>
            handlePageClick(Math.min(totalPages - 1, pageNumber + 1))
          }
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <BsFillCaretRightFill className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
