import Link from "next/link";
import React from "react";

const Sider = ({ nav, set }: any) => {
  return (
    <div className="flex justify-end">
      <div className="bg-[#020817] h-[100vh] w-[200px]">
        <div className="flex flex-col items-center p-2 gap-5 md:hidden">
          {nav.map((el: any) => (
            <Link
              onClick={set(true)}
              key={el.id}
              href={el.url}
              className="hover:underline text-[13px] font-semibold text-white"
            >
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sider;
