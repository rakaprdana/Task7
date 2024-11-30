import { render, screen, fireEvent } from "@testing-library/react";
import FormContact from "../components/elements/Form/formcontact";

test("renders FormContact and submits correctly", () => {
  // Render the form component
  render(<FormContact />);

  // Select input elements
  const nameInput = screen.getByPlaceholderText(/your name/i);
  const emailInput = screen.getByPlaceholderText(/your email/i);
  const messageTextarea = screen.getByPlaceholderText(/your message/i);
  const submitButton = screen.getByText(/send message/i);

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  fireEvent.change(messageTextarea, {
    target: { value: "Hello, this is a test message." },
  });

  // Verify the inputs have the correct values
  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("johndoe@example.com");
  expect(messageTextarea).toHaveValue("Hello, this is a test message.");

  // Simulate form submission
  fireEvent.click(submitButton);

  // Verify that the modal opens after form submission
  const modal = screen.getByText(/Your message has been sent/i); // assuming ModalSuccess shows this text
  expect(modal).toBeInTheDocument();

  // Verify that the form fields are cleared after submission
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
  expect(messageTextarea).toHaveValue("");
});
