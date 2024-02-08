import React from "react";

import "./button.css";

type BaseButtonType = {
    onClick: () => void;
    label?: string;
    type?: "submit" | "reset" | "button" | undefined;
}
export const BaseButton = ({ onClick, label, type }: BaseButtonType) => {
    return(
        <button
            onClick={onClick}
            type={type}
            className="primary-button"
        >
            <span className="label">{label}</span>
        </button>
    );
};
