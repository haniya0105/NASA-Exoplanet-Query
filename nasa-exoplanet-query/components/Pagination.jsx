import React from "react";

// Simple Pagination
// 1-17 of 100
// firstIndex-lastIndex of totalIndexes

function Pagination({ totalResults, firstResultIndex, lastResultIndex, onPrevClick, onNextClick }) {
    return (
        <div className="pagination">
            <button className="pagination-button" onClick={onPrevClick}> &lt; </button>
            <p> {firstResultIndex + 1} - {Math.min(lastResultIndex, totalResults)} of {totalResults} </p>
            <button className="pagination-button" onClick={onNextClick}> &gt; </button>
        </div>
    );
}

export default Pagination;
