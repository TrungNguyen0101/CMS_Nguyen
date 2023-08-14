import React from 'react';
import { useController } from 'react-hook-form';

function InputCheckbox({ name = '', children, control, ...props }) {
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
