import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/elements/Input";

test("render input", () => {
  render(
    <Input
      type="text"
      placeholder="your name"
      icon={""}
      value="name"
      name="name"
      onChange={() => {}}
    />
  );
  // Gunakan getByPlaceholderText untuk elemen input berdasarkan placeholder
  const inputElement = screen.getByPlaceholderText(/your name/i);
  // Pastikan elemen input ditemukan
  expect(inputElement).toBeInTheDocument();
  // Verifikasi bahwa value dari input benar
  expect(inputElement).toHaveValue("name");
});

test("call onChange", () => {
  const handleChange = jest.fn();
  render(
    <Input
      type="email"
      placeholder="your email"
      icon={""}
      value="email"
      name="email"
      onChange={handleChange}
    />
  );
  const emailInput = screen.getByPlaceholderText(/your email/i);
  fireEvent.change(emailInput, { target: { value: "raka@example.com" } });
  expect(emailInput).toHaveValue("email");
  expect(handleChange).toHaveBeenCalledTimes(1);
});
