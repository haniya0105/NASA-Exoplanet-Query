import React, { useState, useEffect } from "react"
import ResultsTable from "@/components/ResultsTable";

function ResultsPanel(props) {
    const [results, setResults] = useState(props.allResults);
    const [queryParams, setQueryParams] = useState(props.queryParams);
    const [filteredResults, setFilteredResults] = useState([]);
    const [areNoResults, setAreNoResults] = useState(false);

    useEffect(() => {
        setResults(props.allResults);
    }, [props.allResults]);

    useEffect(() => {
        setQueryParams(props.queryParams);
        filterResults(props.queryParams);
    }, [props.queryParams]);

    // Aim for lowest time complexity. For filtering --> O(n). Which means, rather than repeatedly filtering based
    // on query parameters, I want to dynamically build the filtering query once and then filter all in one go

    const filterResults = (params) => {
        // new object to store only active filters
        const filters = {};

        // ONLY set filters that have actually been specified
        if (params.hostname) filters.hostname = params.hostname;
        if (params.disc_year) filters.disc_year = parseInt(params.disc_year);
        if (params.discoverymethod) filters.discoverymethod = params.discoverymethod;
        if (params.disc_facility) filters.disc_facility = params.disc_facility;

        // if no filters have been set, do not display results
        if (Object.keys(filters).length === 0) {
            setFilteredResults([]);
            return;
        }

        const filtered = props.allResults.filter(exoplanet => {
            for (const [key, searchValue] of Object.entries(filters)) {
                const exoplanetValue = exoplanet[key];

                 if (exoplanetValue !== searchValue) {
                        return false;
                }
            }
            return true;
        });

        setAreNoResults(!filtered.length);
        setFilteredResults(filtered);
    };

    const onSortClick = (isAscendingOrder, field) => {
        // create shallow copy before ordering -- needed for useState
        const sorted = [...filteredResults].sort((a, b) => {
            const aValue = a[field];
            const bValue = b[field];

            if (typeof aValue === "number") {
                return isAscendingOrder ? aValue - bValue : bValue - aValue;
            } else {
                return isAscendingOrder ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
        });

        setFilteredResults(sorted);
    }

    return (
        <div className="results-panel">
            { areNoResults ? (
                <div className="empty-results">
                    No Results Found!
                </div>
            ) : filteredResults.length ? (
                    <ResultsTable results={filteredResults} onSortClick={onSortClick} />
                )
                 :(
                <div className="empty-search">
                    Query NASA's Exoplanets — Select some fields and click Search 🚀
                </div>
                )
            }

        </div>
    );
}

export default ResultsPanel;