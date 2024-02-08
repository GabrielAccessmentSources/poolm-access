export const LabelHelper = ({ type }: { type?: string }) => {
    switch (type) {
        case "name":
            return {
                label: "First name",
                errorLabel: "You need to enter a first name"
            };
        case "lastName":
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
