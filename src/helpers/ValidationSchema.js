import * as Yup from "yup";


export const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    favoriteMovie: Yup.string().required("Favorite Movie is required"),
});
