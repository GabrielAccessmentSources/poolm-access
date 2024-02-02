import React, { useEffect, useState } from "react";
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
    const films = useSelector((state) => state.films.films);
    const status = useSelector((state) => state.films.status);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        favouriteMovie: ""
    });

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchFilms());
        }
    }, [dispatch, status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form submitted with values:", values);
        setSubmitting(false);
    };

    return (
        <>
            <Card>
                <Formik
                    initialValues={formValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors }) => (
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
                                    value={formValues.firstName}
                                    name="firstName" type="name"
                                    onChange={handleChange}
                                />
                                <div className='spacer'/>
                                <TextInput
                                    value={formValues.lastName}
                                    name="lastName"
                                    type="surname"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='vertical-spacer'/>
                            <div className="selector-row">
                                <Selector
                                    name="favoriteMovie"
                                    label="Favorite Star Wars Movie"
                                    data={films}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="button-container">
                                <BaseButton
                                    onClick={() => {}}
                                    label="Confirm"
                                    type="primary"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </Card>
        </>
    );
};


export default App;
