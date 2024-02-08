import React from "react";
import { Field } from "formik";

import "./selector.css";
import { FilmType } from "../../helpers/types/types";

type SelectorType = {
    data: FilmType[] | undefined,
    label?: string
}

export const Selector = ({ label, data }: SelectorType) => {
    return (
        <div className="selector-wrapper">
            <label htmlFor="customSelector" className="custom-label">
                {label}
            </label>

            <Field as="select" name="selector" className="selector">
                {data?.map((movie) => (
                    <option
                        key={movie.title}
                        value={movie.title}
                        className="selector-option"
                    >
                        {movie.title}
                    </option>
                )) || []}
            </Field>
        </div>
    );
};
