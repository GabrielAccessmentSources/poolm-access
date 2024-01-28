import React from "react";
import "./card.css"; // Import the CSS file

export const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

