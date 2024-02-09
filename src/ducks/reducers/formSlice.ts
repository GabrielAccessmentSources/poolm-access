import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormStateType = {
    firstName: string;
    lastName: string;
    favoriteMovie: string;
}

const initialState: FormStateType = {
    firstName: "",
    lastName: "",
    favoriteMovie: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        submitForm: (state, action: PayloadAction<FormStateType>) => {
            console.log("Form submitted with values:", action.payload);
        },
    },
});

export const { submitForm } = formSlice.actions;

export const selectForm = (state: { form: any; }) => state.form;

export default formSlice.reducer;