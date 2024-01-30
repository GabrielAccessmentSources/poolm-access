import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import { BaseButton } from "../components/Button/BaseButton";

describe("BaseButton component", () => {
    test("renders button with label", () => {
        const onClickMock = jest.fn();
        const label = "Click me";
        const type = "button";

        const { getByText, getByRole } = render(
            <BaseButton onClick={onClickMock} label={label} type={type} />
        );

        const button = getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe("BUTTON");
        expect(button.getAttribute("type")).toBe(type);

        const buttonLabel = getByText(label);
        expect(buttonLabel).toBeInTheDocument();
    });

    test("calls onClick handler when button is clicked", () => {
        const onClickMock = jest.fn();
        const label = "Click me";
        const type = "button";

        const { getByText, getByRole } = render(
            <BaseButton onClick={onClickMock} label={label} type={type} />
        );

        const button = getByRole("button");
        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});