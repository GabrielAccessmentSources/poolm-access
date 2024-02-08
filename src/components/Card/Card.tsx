import React, { ReactNode } from "react";

import "./card.css";

type CardType = {
    children: ReactNode;
};

export const Card = ({ children }: CardType) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

