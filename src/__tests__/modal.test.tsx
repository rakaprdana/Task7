import { render, screen, fireEvent } from "@testing-library/react";
import ModalSuccess from "../components/modal/success";

test("renders ModalSuccess when isOpen is true", () => {
  const handleClose = jest.fn();

  // Render modal dengan isOpen=true
  render(<ModalSuccess isOpen={true} onClose={handleClose} />);

  // Verifikasi modal ditampilkan dengan teks yang benar
  const modalTitle = screen.getByText(/success/i);
  const modalMessage = screen.getByText(/your message has been sent/i);
  const closeButton = screen.getByText(/close/i);

  expect(modalTitle).toBeInTheDocument();
  expect(modalMessage).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});

test("does not render ModalSuccess when isOpen is false", () => {
  const handleClose = jest.fn();

  // Render modal dengan isOpen=false
  render(<ModalSuccess isOpen={false} onClose={handleClose} />);

  // Verifikasi modal tidak dirender
  const modalTitle = screen.queryByText(/success/i); // queryBy digunakan untuk memverifikasi elemen tidak ada
  expect(modalTitle).not.toBeInTheDocument();
});

test("calls onClose when close button is clicked", () => {
  const handleClose = jest.fn();

  // Render modal dengan isOpen=true
  render(<ModalSuccess isOpen={true} onClose={handleClose} />);

  // Simulasikan klik tombol "Close"
  const closeButton = screen.getByText(/close/i);
  fireEvent.click(closeButton);

  // Verifikasi bahwa fungsi onClose dipanggil
  expect(handleClose).toHaveBeenCalledTimes(1);
});
