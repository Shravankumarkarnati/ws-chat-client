import React from "react";

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  changeValue,
  type,
}) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <label
        className="text-md md:text-xl font-bold tracking-wide uppercase mt-4 mb-2 px-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="full-width px-4 h-10 text-md md:text-xl rounded-lg placeholder-gray-700"
        id={id}
        type={type || "text"}
        placeholder={label}
        value={value}
        onChange={changeValue}
        required
      />
    </div>
  );
};

export default TextInput;
