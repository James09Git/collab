import Image from "next/image";
import React from "react";
import bg from "./assets/bg.jpg";
import uni from "./assets/horse.jpg";

const page = () => {
  return (
    <div>
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="#"
          width={1000}
          height={1000}
          className="w-full h-[100vh]  object-cover absolute"
        />
        <div className="relative flex  items-center w-full">
          <div>
            <div className="px-20 py-16 leading-tight">
              <h2 className="text-white text-[40px]">Gomenti Adventures..</h2>
              <p className="text-[20px] font-light text-amber-50">
                Nature Explore
              </p>
            </div>

            <div className="px-20">
              <div className="flex gap-20 z-10 ">
                <button className="border bg-none text-white font-semibold text-[18px] p-2 rounded-md  transition-all duration-300 ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
