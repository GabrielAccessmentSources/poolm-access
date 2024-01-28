import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";
import { LabelHelper } from "../../helpers/LabelHelper";

const initialValues = {
    firstName: "",
};

export const TextInput = ({ type }) => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required(LabelHelper({ type }).errorLabel),
    });

    const handleSubmit = (values) => {
        console.log("Form submitted with values:", values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="my-form">
                <div className="form-group">
                    <ErrorMessage name="firstName" component="div" className="error"/>
                    <label htmlFor="firstName" className="custom-label">
                        {LabelHelper({ type }).label}
                    </label>
                    <div className="input-container">
                        <Field type="text" id="firstName" name="firstName" className="input"/>
                    </div>
                </div>
            </Form>
        </Formik>

    );
};
