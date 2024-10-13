import React from 'react';

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage }) => {
  return (
    <div className="flex md:justify-end justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
      >
        &laquo;
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">{currentPage}</button>
      <button
        onClick={() => setPage(currentPage + 1)}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
