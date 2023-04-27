import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
      onPageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
      onPageChange(page + 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="btn" onClick={handlePreviousClick}>
        «
      </button>
      <button className="btn">Page {page}</button>
      <button className="btn" onClick={handleNextClick}>
        »
      </button>
    </div>
  );
};

export default Pagination;
