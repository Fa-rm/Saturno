import React from "react";



interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange
}) => {
  return (
    <input
    disabled={disabled}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
    className="
      w-full
      p-4
      text-lg
      bg-black
      border-2
      border-neutral-800
      rounded-sm
      outline-none
      text-white
      focus:border-lime-500
      focus:border-2
      transition
      disabled:bg-neutral-900
      disabled:opacity-70
      disabled:cursor-not-allowed
    "
    />
  );
};

export default Input;
