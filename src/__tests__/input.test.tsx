import { render, screen } from "@testing-library/react";
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
