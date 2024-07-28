"use client";
import React, { useState } from "react";
import Image from "next/image";
import BG from "./assets/DE-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_fbdb936e-26f2-4c3f-b82a-920baf1e85d8_medium.jpg";
import Logo from "./assets/Netflix_Logo_PMS.png";
import InputWithButton from "./input";
const Page = () => {
  const [click, Setclick] = useState(Boolean);
  const onclick = () => {
    Setclick(!click) == alert("UNDER DEVELOPMENT");
  };
  return (
    <div className="overflow-y-hidden">
      <header className="w-[100%] h-[80px] flex justify-center items-center absolute backdrop-blur-sm">
        <header className="w-[70%] h-[80px] flex justify-between items-center">
          <Image width={200} height={200} src={Logo} alt="background image" />
          <button
            className="p-[10px] bg-red-600 rounded-md font-medium text-white hover:bg-[#101627] cursor-pointer"
            onClick={onclick}
          >
            Sign up
          </button>
        </header>
      </header>

      <Image width={1300} height={0} src={BG} alt="background image" />
      <div className=" w-full absolute top-[250px] flex justify-center items-center flex-col gap-5 font-sans">
        <h1 className="font-bold text-5xl text-white">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="font-semibold text-white font-sans text-3xl">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="font-medium text-white font-sans text-2xl">
          Ready to watch? Enter your email or mobile number to create or restart
          your membership
        </p>
        <div>
          <InputWithButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
