import SearchPanel from "@/components/SearchPanel";
import {useEffect, useState} from "react";
import ResultsPanel from "@/components/ResultsPanel";
import Loader from "@/components/Loader";

export default function Home() {
    const [queryParams, setQueryParams] = useState({hostname: null, disc_year: null, discoverymethod: null, disc_facility: null});
    const [results, setResults] = useState([]);

    useEffect(() => {
       getExoplanets().then(res => setResults(res));
    }, []);

    // Updates when search button is hit
    function onSubmit(params) {
        setQueryParams(params);
    }

    return (
    <div id="app-container" className={!results.length ? 'loading' : ''}>
        {!results.length ? (
            <Loader />
        ) : (
            <>
                <SearchPanel allResults={results} onSubmit={onSubmit} />
                <ResultsPanel allResults={results} queryParams={queryParams} />
            </>
        )}
    </div>
    );
}

async function getExoplanets() {
    const res = await fetch('/api/getData');
    return res.json();
}