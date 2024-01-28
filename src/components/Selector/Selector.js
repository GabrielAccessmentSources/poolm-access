import React from "react";
import "./selector.css";
export const Selector = ({ label, children }) => {
    return (
        <div className="selector-container">
            <label htmlFor="customSelector" className="custom-label">
                {label}
            </label>
            <select id="customSelector" className="custom-selector">
                {children}
            </select>
        </div>
    );
};
