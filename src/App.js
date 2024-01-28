import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "./ducks/actions/fetchFilms";

import { Container } from "@mui/material";

const App = () => {
    const dispatch=  useDispatch();
    const films = useSelector((state) => state.films.films);
    const status = useSelector((state) => state.films.status);

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchFilms());
        }
    }, [dispatch, status]);

    console.log(films);

  return (
    <div className="App">
        <Container>
            <p>Hello world</p>
        </Container>
    </div>
  );
};

export default App;
