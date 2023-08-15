import React from "react";
import { Control, useController } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  name?: string;
  className?: string;
  children?: React.ReactNode;
  control: Control;
  options: Option[];
  [key: string]: any; // Allow additional props
}

function InputSelect({
  name = "",
  className,
  children,
  control,
  options,
  ...props
}: InputSelectProps) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <div className="flex flex-col text-[#969696]">
      <label
        htmlFor={name}
        className="text-[14px] font-semibold text-[#79859c] mb-[8px]"
      >
        {children}
      </label>
      <select
        id={name}
        name={name}
        className={`bg-[#252b3b] rounded py-[10px] px-[10px] leading-[21px] duration-300  border 
               focus:placeholder-[#6e768b] h-[38px]  focus:bg-[#272d3d] text-[14px] leading outline-none  text-[#6e768b] ${className} `}
        {...field}
        {...props}
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={option.value} className="max-w-[200px]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
