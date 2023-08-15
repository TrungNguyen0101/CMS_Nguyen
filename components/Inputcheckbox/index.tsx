import React from "react";
import { Control, useController } from "react-hook-form";

interface InputCheckboxProps {
  name?: string;
  children?: React.ReactNode;
  control: Control;
  [key: string]: any; // Allow additional props
}

function InputCheckbox({
  name = "",
  children,
  control,
  ...props
}: InputCheckboxProps) {
  const { field } = useController({
    control,
    name,
    shouldUnregister: true,
  });

  return (
    <div className="flex items-center gap-x-[16px]">
      <input
        id={name}
        name={name}
        type="checkbox"
        className="form-check-input"
        {...props}
        {...field}
      />
      <label htmlFor={name} className="text-[16px]  select-none">
        {children}
      </label>
    </div>
  );
}

export default InputCheckbox;
