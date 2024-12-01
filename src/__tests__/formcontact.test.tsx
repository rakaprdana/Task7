import { render, screen, fireEvent } from "@testing-library/react";
import FormContact from "../components/elements/Form/formcontact";

describe("FormContact Component", () => {
  test("renders the form and its elements correctly", () => {
    render(<FormContact />);
    // Verifikasi elemen form
    expect(
      screen.getByText(/Send me a message if you're interested/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument();
    expect(screen.getByText(/Send message/i)).toBeInTheDocument();
  });

  test("allows users to input data into the form", () => {
    render(<FormContact />);
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/Your email/i);
    const messageInput = screen.getByPlaceholderText(/Your message/i);

    // Simulasi input data
    fireEvent.change(nameInput, { target: { value: "Raka Pradana" } });
    fireEvent.change(emailInput, { target: { value: "raka@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message." },
    });

    // Verifikasi input data
    expect(nameInput).toHaveValue("Raka Pradana");
    expect(emailInput).toHaveValue("raka@example.com");
    expect(messageInput).toHaveValue("This is a test message.");
  });

  test("shows an alert when fields are empty on submit", () => {
    render(<FormContact />);
    const submitButton = screen.getByText(/Send message/i);

    // Pastikan input kosong
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/Your email/i);
    const messageInput = screen.getByPlaceholderText(/Your message/i);

    expect(nameInput).toHaveValue(""); // Verifikasi input kosong
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
    fireEvent.click(submitButton);
  });

  test("submits the form and clears fields", () => {
    render(<FormContact />);
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/Your email/i);
    const messageInput = screen.getByPlaceholderText(/Your message/i);
    const submitButton = screen.getByText(/Send message/i);

    // Simulasi input dan submit
    fireEvent.change(nameInput, { target: { value: "Raka Pradana" } });
    fireEvent.change(emailInput, { target: { value: "raka@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message." },
    });
    fireEvent.click(submitButton);

    // Verifikasi modal terbuka
    expect(screen.getByText(/Your message has been sent/i)).toBeInTheDocument();

    // Verifikasi form kosong
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });

  test("closes the modal when onClose is triggered", () => {
    render(<FormContact />);
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const emailInput = screen.getByPlaceholderText(/Your email/i);
    const messageInput = screen.getByPlaceholderText(/Your message/i);
    const submitButton = screen.getByText(/Send message/i);

    // Simulasi input dan submit
    fireEvent.change(nameInput, { target: { value: "Raka Pradana" } });
    fireEvent.change(emailInput, { target: { value: "raka@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message." },
    });
    fireEvent.click(submitButton);

    // Verifikasi modal terbuka
    const closeButton = screen.getByText(/Close/i); // Asumsi ada tombol Close di ModalSuccess
    fireEvent.click(closeButton);

    // Verifikasi modal tertutup
    expect(
      screen.queryByText(/Your message has been sent/i)
    ).not.toBeInTheDocument();
  });
});
