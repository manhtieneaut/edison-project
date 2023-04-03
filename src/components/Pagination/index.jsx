import React from 'react';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {

    const onPageChange = (page) => {
        if (page < 1 || page > totalPages) {
            return;
        }
        onChangePage(page);
    };

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            <span>{currentPage}</span> / <span>{totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
