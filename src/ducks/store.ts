import { configureStore } from "@reduxjs/toolkit";

import filmsSlice from "./reducers/filmsSlice";
import formSlice from "./reducers/formSlice";

const rootReducer = {
    films: filmsSlice,
    form: formSlice
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
