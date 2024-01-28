import { createSlice } from "@reduxjs/toolkit";

import { fetchFilms } from "../actions/fetchFilms";

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        status: "idle",
        error: null,
    },
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
