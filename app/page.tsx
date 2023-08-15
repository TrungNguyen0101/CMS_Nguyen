"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import { toggleCollapsed } from "@/redux/reducers/menuReducer";

import Application from "@/svgs/application.svg";
import Bars from "@/svgs/bars.svg";
import Fullscreen from "@/svgs/Fullscreen.svg";
import Notifications from "@/svgs/Notifications.svg";
import Search from "@/svgs/search.svg";
import Settings from "@/svgs/Settings.svg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FormValidation from "@/components/FormValidation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
export interface Props {}
const Home: NextPage<Props> = () => {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="fixed top-0 left-0 w-full">
        <div className="py-[16px] bg-[#272d3e] text-white flex justify-between items-center px-[16px]">
          <div className="flex items-center">
            <div className="w-[250px] text-center">
              <h2>Meta Technology</h2>
            </div>
            <div className="flex  items-center gap-x-[20px]">
              <button type="button" onClick={() => dispatch(toggleCollapsed())}>
                <Bars className="text-[24px]" />
              </button>
              <div className="relative ">
                <button
                  type="button"
                  className="absolute top-[50%] translate-y-[-50%] left-[10px]"
                >
                  <Search className="text-[24px]" />
                </button>
                <input
                  type="text"
                  className="outline-none rounded-md bg-[#2b3244] p-[7px] pl-[40px] text-[#778196] text-[14px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-[32px]">
            <Image
              src="/language.png"
              alt="Loa"
              height={16}
              width={24}
              className="object-cover"
            />
            <Application className="text-[24px]" />
            <Fullscreen className="text-[24px]" />
            <Notifications className="text-[24px]" />
            <button type="button" className="w-[36px] h-[36px]">
              <Image
                src="/avt.jpg"
                alt="Loa"
                height={36}
                width={36}
                className="object-cover w-full h-full rounded-full "
              />
            </button>
            <Settings className="text-[24px]" />
          </div>
        </div>
      </div>
      <div className="mt-[68px] ">
        <div className="fixed top-[68px] left-0 h-full bg-[#252b3b] overflow-y-auto pb-[68px]">
          <div className="lg:inline-block hidden">
            <Navbar collapsed={collapsed} />
          </div>
        </div>
        <div className="absolute top-[68px] left-0 h-[100vh] bg-[#252b3b] overflow-y-auto pb-[68px]">
          <div className="inline-block lg:hidden overflow-hidden">
            <Navbar collapsed={collapsed} />
          </div>
        </div>
        <FormValidation collapsed={collapsed}></FormValidation>
      </div>
    </section>
  );
};

export default Home;
