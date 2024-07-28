import Image from "next/image";
import React from "react";
import img5 from "./assets/img5.jpeg";

const Page = () => {
  return (
    <div>
      <Image
        src={img5}
        alt="#"
        width={1000}
        height={1000}
        className="w-full h-[100vh]  object-cover absolute"
      />
      <div className="relative flex  items-center w-full justify-center">
        <div className="">
          <div className="px-20 py-16 leading-tight">
            <h2 className="text-white text-[150px]">Fedora Bakery..</h2>
            <p className="text-[50px] font-light text-white">
              Unlimited choices
            </p>
            <p className="text-[25px] font-light text-white">
              Lorem ipsum dolor sit, amet consectet
              <br />
              adipisicing elit. Hic ut tempore aspernatur,
              <br />
              veritatis dolor commodi ad nobis exercitationem
              <br />
              suscipit repellendus non eveniet voluptatum
              <br />
              dignissimos veniam assumenda omnis sunt. Laborum, numquam!
            </p>
          </div>

          <div className="px-20 absolute">
            <div className="flex gap-20 z-10 ">
              <button className="border bg-white text-black font-semibold text-[18px] p-2 rounded-md  transition-all duration-300 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
