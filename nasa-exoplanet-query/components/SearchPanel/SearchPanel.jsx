import React, { useState, useEffect } from "react"
import SearchInput from "@/components/SearchInput/SearchInput";

function SearchPanel(props) {
    const [hostname, setHostname] = useState("");
    const [discoveryYear, setDiscoveryYear] = useState("");
    const [discoveryMethod, setDiscoveryMethod] = useState("");
    const [discoveryFacility, setDiscoveryFacility] = useState("");

    // On search, pass query parameters to parent
    const onSubmit = (e) => {
        e.preventDefault();
        const queryParams = {
            hostname: hostname,
            year: discoveryYear,
            method: discoveryMethod,
            facility: discoveryFacility
        };
        props.onSubmit(queryParams);
    };

    const onClear = () => {
        setHostname("");
        setDiscoveryYear("");
        setDiscoveryMethod("");
        setDiscoveryFacility("");

        const queryParams = {
            hostname: "",
            year: "",
            method: "",
            facility: ""
        };
        props.onSubmit(queryParams);
    };

    return (
        <div>
            <form className="search-panel" onSubmit={onSubmit}>
                <SearchInput name="Host Name" value={hostname} onChange={setHostname} />
                <SearchInput name="Discovery Year" value={discoveryYear} onChange={setDiscoveryYear} />
                <SearchInput name="Discovery Method" value={discoveryMethod} onChange={setDiscoveryMethod} />
                <SearchInput name="Discovery Facility" value={discoveryFacility} onChange={setDiscoveryFacility} />
                <button type="submit" className="search-button">Search</button>
                <button type="reset" className="clear-button" onClick={onClear}>Clear</button>
            </form>
        </div>
    );
}

export default SearchPanel;