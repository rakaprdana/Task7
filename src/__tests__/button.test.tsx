import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/elements/Button";

test("render button", () => {
  render(<Button label="Click" type="submit" onClick={() => {}} />);
  const buttonElement = screen.getByText(/click/i);
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="Click" type="submit" onClick={handleClick} />);
  const buttonElement = screen.getByText(/click/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
