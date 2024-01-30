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
import "../components/Card/card.css";

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
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="title-row">
                        <h1 className="custom-title">My form</h1>
                    </div>
                    <div className="input-row">
                        <TextInput name="firstName" type="name"/>
                        <div className='spacer'/>
                        <TextInput name="lastName" type="surname"/>
                    </div>

                    <div className='vertical-spacer'/>
                    <div className="selector-row">
                        <Selector
                            name="favoriteMovie"
                            label="Favorite Star Wars Movie"
                            data={films}
                        />
                    </div>

                    <div className="button-container">
                        <BaseButton
                            onClick={() => {
                            }}
                            label="Confirm"
                            type="primary"
                        />
                    </div>
                </Form>
            </Formik>
        </Card>
    </>
  );
};

export default App;
