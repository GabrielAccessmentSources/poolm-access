import { configureStore } from "@reduxjs/toolkit";

import filmsSlice from "./reducers/filmsSlice";

const rootReducer = {
    films: filmsSlice
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
