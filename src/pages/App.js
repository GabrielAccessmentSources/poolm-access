import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, ErrorMessage } from "formik";

import { fetchFilms } from "../ducks/actions/fetchFilms";
import { Card } from "../components/Card/Card";
import { TextInput } from "../components/TextInput/TextInput";
import { Selector } from "../components/Selector/Selector";
import { BaseButton } from "../components/Button/BaseButton";
import { validationSchema } from "../helpers/ValidationSchema";
import "./app.css";
import "../components/Card/card.css";

const App = () => {
    const dispatch=  useDispatch();
    const films = useSelector(
        (state) => state.films.films
    );
    const status = useSelector(
        (state) => state.films.status
    );

    console.log("FILMS", films);

    const initialValues = {
        firstName: "",
        lastName: "",
        favouriteMovie: ""
    };

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchFilms());
        }
    }, [dispatch, status]);


    const handleSubmit = (values) => {
        console.log("Form submitted with values:", values);
    };

    return (
        <>
            <Card>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                >
                    {({ errors }) => {
                        return (
                            <Form>
                                <div className="title-row">
                                    <h1 className="custom-title">My form</h1>
                                </div>

                                {errors.firstName && (
                                    <div className="input-row">
                                        <ErrorMessage name="firstName" component="div" />
                                    </div>
                                )}
                                {errors.lastName && (
                                    <div className="input-row">
                                        <ErrorMessage name="lastName" component="div" />
                                    </div>
                                )}

                                <div className="input-row">
                                    <TextInput
                                        name="firstName"
                                        type="name"
                                    />
                                    <div className='spacer'/>
                                    <TextInput
                                        name="lastName"
                                        type="lastName"
                                    />
                                </div>

                                <div className='vertical-spacer'/>
                                <div className="selector-row">
                                    <Selector
                                        name="selector"
                                        label="Favorite Star Wars Movie"
                                        data={films}
                                    />
                                </div>

                                <div className="button-container">
                                    <BaseButton
                                        onClick={handleSubmit}
                                        label="Confirm"
                                        type="primary"
                                    />
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </Card>
        </>
    );
};


export default App;
