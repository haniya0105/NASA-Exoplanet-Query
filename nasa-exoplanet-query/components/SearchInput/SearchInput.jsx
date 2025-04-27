import React, { useState, useEffect } from "react"

function SearchInput(props) {
    return (
        <div className='input-item'>
            <label htmlFor={props.name}>
                <input
                    id={props.name}
                    name={props.name}
                    placeholder={props.name}
                    value={props.value || ""}
                    onChange={(e) => props.onChange(e.target.value)}
                    type="text"
                />
            </label>
        </div>
    );
}

export default SearchInput;