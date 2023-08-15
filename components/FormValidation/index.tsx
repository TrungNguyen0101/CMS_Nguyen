"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import * as yup from "yup";

import InputMain from "../Input";
import InputDate from "../InputDate";
import InputSelect from "../InputSelect";
import InputCheckbox from "../Inputcheckbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
// import InputCheckbox from "../InputCheckbox";
// import InputDate from "../InputDate";
// import InputSelect from "../InputSelect";

// import "./index.scss";

// import InputMain from "../Input";
// import InputCheckbox from "../InputCheckbox";
// import InputDate from "../InputDate";
// import InputSelect from "../InputSelect";

interface FormValues {
  firstname: string;
  checkbox: boolean;
  birthdate: Date; // Make sure birthdate is of type Date
  select: string;
}

const schema = yup
  .object({
    firstname: yup.string().required("Không được bỏ trống"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Bạn phải chấp nhận các điều khoản và điều kiện"),
    birthdate: yup
      .date()
      .max(dayjs(), "Ngày không được vượt quá thời gian hiện tại")
      .min(dayjs().subtract(150, "year"), "Tuổi phải lớn hơn 150 tuổi")
      .required("Vui lòng nhập ngày sinh")
      .typeError("Vui lòng nhập ngày sinh"),
    select: yup.string(),
  })
  .required();

function FormValidation({ collapsed }: { collapsed: boolean }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema) as any,
    defaultValues: {
      firstname: "",
      birthdate: new Date(), // Set an initial date value
      checkbox: false,
      select: "1",
    },
  });

  const handlerSubmitForm = (values: FormValues) => {
    console.log("values:", values);
  };

  return (
    <div>
      <div
        className={`lg:block hidden px-[5px] py-[20px] h-[100vh] bg-[#1d222e] text-white ${
          !collapsed ? "ml-[250px]" : "ml-[70px]"
        }`}
      >
        <div className="px-[15px]">
          <h2 className="font-bold">Form Validation</h2>
          <form
            action=""
            autoComplete="off"
            className="bg-[#252b3b] p-[15px]"
            onSubmit={handleSubmit(handlerSubmitForm)}
          >
            <div className="grid grid-cols-3 gap-x-[30px]">
              <div className="inline-block">
                <InputMain
                  control={control as any}
                  name="firstname"
                  placeholder="First Name"
                  className={`${
                    errors.firstname
                      ? "shadow-input border-[#ff3d60] "
                      : "border-[#6e768b]"
                  } `}
                >
                  First Name
                </InputMain>
                <span className="text-[14px] text-red-500">
                  {errors?.firstname?.message}
                </span>
              </div>
              <div className="inline-block ">
                <InputDate control={control as any} name="birthdate">
                  Birth Date
                </InputDate>
                <span className="text-[14px] text-red-500">
                  {errors?.birthdate?.message}
                </span>
              </div>
              <div className="inline-block ">
                <InputSelect
                  control={control as any}
                  name="select"
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "2", label: "Option 2" },
                    { value: "3", label: "Option 3" },
                  ]}
                >
                  Select
                </InputSelect>
              </div>
            </div>
            <div className="mt-[10px] ">
              <InputCheckbox control={control as any} name="checkbox">
                Đồng ý với các điều khoản và điều kiện
              </InputCheckbox>
              <span className="text-[14px] text-red-500">
                {errors?.checkbox?.message}
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#1677ff] px-[10px] py-[5px] mt-[10px] rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className={`block ml-[70px] lg:hidden px-[5px] py-[20px] h-[100vh] bg-[#1d222e] text-white ${
          !collapsed ? "" : ""
        }`}
      >
        <div className="px-[15px]">
          <h2 className="font-bold">Form Validation</h2>
          <form
            action=""
            autoComplete="off"
            className="bg-[#252b3b] p-[15px]"
            onSubmit={handleSubmit(handlerSubmitForm)}
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px]">
              <div className="inline-block">
                <InputMain
                  control={control as any}
                  name="firstname"
                  placeholder="First Name"
                  className={`${
                    errors.firstname
                      ? "shadow-input border-[#ff3d60] "
                      : "border-[#6e768b]"
                  } `}
                >
                  First Name
                </InputMain>
                <span className="text-[14px] text-red-500">
                  {errors?.firstname?.message}
                </span>
              </div>
              <div className="inline-block ">
                <InputDate control={control as any} name="birthdate">
                  Birth Date
                </InputDate>
                <span className="text-[14px] text-red-500">
                  {errors?.birthdate?.message}
                </span>
              </div>
              <div className="inline-block ">
                <InputSelect
                  control={control as any}
                  name="select"
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "2", label: "Option 2" },
                    { value: "3", label: "Option 3" },
                  ]}
                >
                  Select
                </InputSelect>
              </div>
            </div>
            <div className="mt-[10px] ">
              <InputCheckbox control={control as any} name="checkbox">
                Đồng ý với các điều khoản và điều kiện
              </InputCheckbox>
              <span className="text-[14px] text-red-500">
                {errors?.checkbox?.message}
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#1677ff] px-[10px] py-[5px] mt-[10px] rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormValidation;
