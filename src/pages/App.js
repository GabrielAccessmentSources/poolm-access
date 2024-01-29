import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";

import { fetchFilms } from "../ducks/actions/fetchFilms";
import { Card } from "../components/Card/Card";
import { TextInput } from "../components/TextInput/TextInput";
import { Selector } from "../components/Selector/Selector";
import { BaseButton } from "../components/Button/BaseButton";
import { validationSchema } from "../helpers/ValidationSchema";
import "./app.css";

const App = () => {
    const dispatch=  useDispatch();
    const films = useSelector((state) => state.films.films);
    const status = useSelector((state) => state.films.status);
    console.log(films);

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchFilms());
        }
    }, [dispatch, status]);


    const initialValues = {
        firstName: "",
        lastName: "",
        favouriteMovie: ""
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form submitted with values:", values);
        setSubmitting(false);
    };

    return (
    <>
        <Card>
            <h1 className="custom-title">My form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="input-row">
                        <TextInput name="firstName" label="First Name" />
                        <TextInput name="lastName" label="Last Name" />
                    </div>

                    <div className="selector-row">
                        <Selector name="favoriteMovie" label="Favorite Star Wars Movie" />
                    </div>

                    <BaseButton
                        onClick={() => {}}
                        label="Confirm"
                        type="primary"
                    />
                </Form>
            </Formik>
        </Card>
    </>
  );
};

export default App;
