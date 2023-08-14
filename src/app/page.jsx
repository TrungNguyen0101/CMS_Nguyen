'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import FormValidation from '@/components/Form/FormValidation';
import Navbar from '@/components/Navbar';

import Application from '@/svgs/application.svg';
import Bars from '@/svgs/bars.svg';
import Fullscreen from '@/svgs/Fullscreen.svg';
import Notifications from '@/svgs/Notifications.svg';
import Search from '@/svgs/search.svg';
import Settings from '@/svgs/Settings.svg';

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <section>
      <div className="fixed top-0 left-0 w-full">
        <div className="py-[16px] bg-[#272d3e] text-white flex justify-between items-center px-[16px]">
          <div className="flex items-center">
            <div className="w-[250px] text-center">
              <h2>Meta Technology</h2>
            </div>
            <div className="flex  items-center gap-x-[20px]">
              <button type="button" onClick={toggleCollapsed}>
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
      <div className="mt-[68px]">
        <div className="fixed top-[68px] left-0 h-full bg-[#252b3b] overflow-y-auto pb-[68px] ">
          <Navbar collapsed={collapsed} />
        </div>
        <FormValidation collapsed={collapsed} />
      </div>
    </section>
  );
}

export default Home;
