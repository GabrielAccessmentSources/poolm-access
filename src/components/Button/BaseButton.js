import React from "react";

import "./button.css";
export const BaseButton = ({ onClick, label, type }) => {
    return(
        <button onClick={onClick} type={type} className="primary-button">
            <span className="label">{label}</span>
        </button>
    );
};
