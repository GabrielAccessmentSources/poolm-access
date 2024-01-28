export const LabelHelper = ({ type }) => {
    switch (type) {
        case "name":
            return {
                label: "First name",
                errorLabel: "You need to enter a first name"
            };
        case "surname":
            return {
                label: "Last name",
                errorLabel: "You need to enter a last name"
            };
        default:
            return {
                label: "Label",
                errorLabel: "Error label",
            };
    }
};
