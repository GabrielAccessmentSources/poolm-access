import { createSlice } from "@reduxjs/toolkit";

import { fetchFilms } from "../actions/fetchFilms";

type FilmsStateType =  {
    films: string[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | undefined | null;
}

const initialState: FilmsStateType = {
    films: [],
    status: "idle",
    error: null,
};

const filmsSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default filmsSlice.reducer;
