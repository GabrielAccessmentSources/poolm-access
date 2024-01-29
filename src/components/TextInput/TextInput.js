import React from "react";
import { Field, ErrorMessage } from "formik";
import "./textInput.css";
import { LabelHelper } from "../../helpers/LabelHelper";

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