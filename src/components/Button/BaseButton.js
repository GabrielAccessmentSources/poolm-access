import React from "react";

export const BaseButton = ({ onClick, label, type }) => {
    return(
        <button onClick={onClick} type={type}>
            {label}
        </button>
    );
};
