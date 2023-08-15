import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface InputMainProps extends UseControllerProps {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

function InputMain({
  name, // Use 'name' from UseControllerProps
  type = "text",
  className,
  children,
  control,
  ...props
}: InputMainProps) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    control,
    name, // Use 'name' here
  });

  return (
    <div className="flex flex-col text-[#969696]">
      <label
        htmlFor={name} // Use 'name' here
        className="text-[14px] font-semibold text-[#79859c] mb-[8px]"
      >
        {children}
      </label>
      <input
        id={name} // Use 'name' here
        name={name as string}
        type={type}
        placeholder={props.placeholder}
        className={`bg-[#252b3b] rounded py-[10px] px-[10px] leading-[21px] duration-300  border 
             focus:placeholder-[#6e768b] h-[38px] focus:bg-[#272d3d] text-[14px] leading outline-none  text-[#6e768b] ${className} `}
        ref={ref}
        {...inputProps}
        {...props}
      />
    </div>
  );
}

export default InputMain;
