import React from "react";
import { Field, ErrorMessage } from "formik";

import { LabelHelper } from "../../helpers/LabelHelper";
import "./textInput.css";

export const TextInput = ({ name, type }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={name} className="custom-label">
                {LabelHelper({ type }).label} *
            </label>
            <Field
                type="text"
                id={name}
                name={name}
                className="input"
            />
            <ErrorMessage name={name} component="div" />
        </div>
    );
};