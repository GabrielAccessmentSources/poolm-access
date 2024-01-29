import React from "react";
import "./selector.css";

export const Selector = ({ label, data }) => {
    return (
        <div className="selector-container">
            <label htmlFor="customSelector" className="custom-label">
                {label}
            </label>
            <select id="customSelector" className="custom-selector">
                {data?.map((movie) => (
                    <option key={movie.title} value={movie.title}>
                        {movie.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
