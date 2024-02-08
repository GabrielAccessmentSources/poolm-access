import React from "react";
import { Field } from "formik";

import { LabelHelper } from "../../helpers/LabelHelper";
import "./textInput.css";

type TextInputType = {
    name?: string;
    type?: string;
    value?: string;
}

export const TextInput = ({ name, type, value }: TextInputType) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={name} className="custom-label">
                {LabelHelper({ type }).label} *
            </label>
            <Field
                type="text"
                id={name}
                name={name}
                value={value}
                className="input"
            />
        </div>
    );
};

