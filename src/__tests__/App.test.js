import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  render(<App />);

  // Find the element with the text "Hello World"
  const textElement = screen.getByText("Hello World");

  expect(textElement).toBeInTheDocument();
});