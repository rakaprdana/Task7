import "boxicons";
import { ChangeEvent } from "react";
interface InputProps {
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = ({
  type,
  placeholder,
  icon,
  value,
  name,
  onChange,
  required = true,
}: InputProps) => {
  return (
    <>
      <div className="w-full relative">
        <i
          className={`bx ${icon} ml-4 absolute top-7 transform -translate-y-1/2 text-gray-400 text-3xl  transition-colors duration-300 `}
        ></i>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          required={required}
          className="bg-stone-600 rounded-md py-4 pl-20 mb-4 w-full"
        />
      </div>
    </>
  );
};

export default Input;
