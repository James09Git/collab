import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          width={1000}
          height={1000}
          src={"/img1.jpeg"}
          alt=""
          className="w-full h-[70%] object-contain"
        />

        <div className="flex items-center justify-center">
          <div className="text-black text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consequatur culpa error suscipit optio similique vel modi nemo
            repellendus? Harum saepe repudiandae amet, ipsum tempora commodi
            aspernatur eos illo doloremque?
          </div>
          <div>
            <button className="border text-white font-semibold text-[18px] p-4 rounded-md  transition-all duration-300 ">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
