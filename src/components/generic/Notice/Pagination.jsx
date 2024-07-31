import React from 'react';
import "./Pagination.css"

const Pagination = ({ currentPage, totalPageCount, currentGroup, pageGroupSize, onPageChange, onPreviousGroup, onNextGroup }) => {
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPageCount);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex pageBtnWrap">
            <div className='flex buttonDown'>
                <button onClick={onPreviousGroup} disabled={currentGroup === 1}>
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        id={number}
                        onClick={() => onPageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
                <button onClick={onNextGroup} disabled={endPage >= totalPageCount}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;
