import React, {useState} from "react";

function SortingArrow(props) {
    const [isArrowUp, setIsArrowUp] = useState(false);

    const changeOrder = () => {
        props.onClick(isArrowUp, props.field);
        setIsArrowUp((prev) => !prev);
    }

    return (
        <span className={isArrowUp ? "sorting-arrow-up" : "sorting-arrow-down"} onClick={changeOrder}>
        </span>
    );
}

export default SortingArrow;
