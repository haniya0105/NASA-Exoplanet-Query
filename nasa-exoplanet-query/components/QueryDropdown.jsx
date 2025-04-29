import React from "react";
import Select from "react-select";

function QueryDropdown(props) {
    const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const handleChange = (selectedOption) => {
        props.onChange(selectedOption ? selectedOption.value : "");
    };

    return (
            <Select
                id={props.name}
                name={props.name}
                value={props.options.find(option => option.value === props.value) || null}
                onChange={handleChange}
                options={props.options}
                placeholder={`Select ${props.name}`}
                className="dropdown-select"
                isClearable
            />
    );
}

export default QueryDropdown;
