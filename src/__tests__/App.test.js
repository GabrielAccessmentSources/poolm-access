import { render, screen } from "@testing-library/react";
import App from "../pages/App";

test("renders App component", () => {
  render(<App />);

  const textElement = screen.getByText("Hello World");

  expect(textElement).toBeInTheDocument();
});
