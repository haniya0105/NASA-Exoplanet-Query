import React, { useState } from "react"
import QueryDropdown from "@/components/QueryDropdown";

function SearchPanel(props) {
    const [hostname, setHostname] = useState("");
    const [discoveryYear, setDiscoveryYear] = useState("");
    const [discoveryMethod, setDiscoveryMethod] = useState("");
    const [discoveryFacility, setDiscoveryFacility] = useState("");
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);

    // On search, pass query parameters to parent
    const onSubmit = (e) => {
        e.preventDefault();
        const queryParams = {
            hostname: hostname,
            disc_year: discoveryYear,
            discoverymethod: discoveryMethod,
            disc_facility: discoveryFacility
        };
        props.onSubmit(queryParams);
    };

    const onClear = () => {
        setHostname("");
        setDiscoveryYear("");
        setDiscoveryMethod("");
        setDiscoveryFacility("");
        setIsSearchEmpty(false);

        const queryParams = {
            hostname: "",
            disc_year: "",
            discoverymethod: "",
            disc_facility: ""
        };
        props.onSubmit(queryParams);
    };

    const getOptions = (field) => {
        // Sets only keep unique values. Creating a set will automatically remove all duplications
        const uniqueOptions = new Set(props.allResults.map(item => item[field]));
        // convert to an array of labels and values for the Dropdown
        return Array.from(uniqueOptions).map(val => ({
            label: val,
            value: val
        }));
    }

    // only display error message if ALL fields are empty
    const checkSearchParameters = () => {
        setIsSearchEmpty(!hostname && !discoveryMethod && !discoveryFacility && !discoveryYear);
    }

    return (
        <div>
            <form className="search-panel" onSubmit={onSubmit}>
                <QueryDropdown name="Host Name" value={hostname} onChange={setHostname} options={getOptions("hostname")}/>
                <QueryDropdown name="Discovery Year" value={discoveryYear} onChange={setDiscoveryYear} options={getOptions("disc_year")}/>
                <QueryDropdown name="Discovery Method" value={discoveryMethod} onChange={setDiscoveryMethod} options={getOptions("discoverymethod")}/>
                <QueryDropdown name="Discovery Facility" value={discoveryFacility} onChange={setDiscoveryFacility} options={getOptions("disc_facility")}/>
                <div>
                    <button type="submit" className="search-button" onClick={checkSearchParameters}>Search</button>
                    <button type="reset" className="clear-button" onClick={onClear}>Clear</button>
                </div>
            </form>
            <div className="empty-search-error">
            {isSearchEmpty && (
                    <span>Please make a selection!</span>
            )}
            </div>
        </div>
    );
}

export default SearchPanel;