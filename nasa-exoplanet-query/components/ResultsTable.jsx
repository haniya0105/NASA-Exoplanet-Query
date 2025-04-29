import React from "react";
import SortingArrow from "@/components/SortingArrow";
import Pagination from "@/components/Pagination";

function ResultsTable({ results, onSortClick }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [resultsPerPage, setResultsPerPage] = React.useState(7);

    const lastResultIndex = currentPage * resultsPerPage;
    const firstResultIndex = lastResultIndex - resultsPerPage;
    const currentResults = results.slice(firstResultIndex, lastResultIndex);

    let totalPages = Math.ceil(results.length/resultsPerPage);

    // Can't go lower than first page
    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    // Can't go higher than max page
    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="results-table">
            <table>
                <thead>
                <tr>
                    <th>
                        <div className="sortable-header">
                            Host Name
                            <SortingArrow onClick={onSortClick} field={"hostname"} />
                        </div>
                    </th>
                    <th>
                        <div className="sortable-header">
                            Discovery Year
                            <SortingArrow onClick={onSortClick} field={"disc_year"} />
                        </div>
                    </th>
                    <th>
                        <div className="sortable-header">
                            Discovery Method
                            <SortingArrow onClick={onSortClick} field={"discoverymethod"} />
                        </div>
                    </th>
                    <th>
                        <div className="sortable-header">
                            Discovery Facility
                            <SortingArrow onClick={onSortClick} field={"disc_facility"} />
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {currentResults.map((exoplanet, index) => (
                    <tr key={index}>
                        <td>
                            <a
                                href={`https://exoplanetarchive.ipac.caltech.edu/overview/${exoplanet.hostname}`}
                                target="_blank"
                                className="planet-link"
                            >
                                {exoplanet.hostname}
                            </a>
                        </td>
                        <td>{exoplanet.disc_year}</td>
                        <td>{exoplanet.discoverymethod}</td>
                        <td>{exoplanet.disc_facility}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination totalResults={results.length} firstResultIndex={firstResultIndex} lastResultIndex={lastResultIndex} onPrevClick={handlePrevPage} onNextClick={handleNextPage} />
        </div>
    );
}

export default ResultsTable;
