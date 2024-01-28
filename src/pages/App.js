import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFilms } from "../ducks/actions/fetchFilms";
import { Card } from "../components/Card/Card";
import { TextInput } from "../components/TextInput/TextInput";
import "./app.css";
import { Selector } from "../components/Selector/Selector";

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

  return (
    <>
        <Card>
            <h1>My form</h1>
            <div className="input-row">
                <TextInput type="name"/>
                <TextInput type="surname"/>
            </div>
            <Selector label={"Favorite star wars movie"} data={films}/>
        </Card>
    </>
  );
};

export default App;
