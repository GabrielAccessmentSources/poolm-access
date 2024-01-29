import React from "react";
import { Field, ErrorMessage } from "formik";
import "./form.css";
import { LabelHelper } from "../../helpers/LabelHelper";

export const TextInput = ({ name, label, type }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="custom-label">
                {LabelHelper({ type }).label}
            </label>
            <Field
                type="text"
                id={name}
                name={name}
                className="input"
                placeholder={label}
            />
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    );
};