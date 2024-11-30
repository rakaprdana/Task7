interface ButtonProps {
  label: string;
  type: "submit" | "reset" | "button";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="mt-8 p-4 rounded-sm bg-stone-800 hover:bg-zinc-800 active:bg-stone-950 duration-700"
      >
        {label}
      </button>
    </>
  );
};

export default Button;
