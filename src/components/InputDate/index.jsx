import React from 'react';
import { useController } from 'react-hook-form';

function InputDate({ name = '', children, control, ...props }) {
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
      <input
        id={name}
        name={name}
        type="date"
        className=" bg-[#252b3b] rounded py-[10px] px-[10px] leading-[21px] duration-300  border 
             focus:placeholder-[#6e768b] h-[38px] min-w-[200px] focus:bg-[#272d3d] text-[14px] leading outline-none  text-[#6e768b] "
        {...props}
        {...field}
      />
    </div>
  );
}
export default InputDate;
