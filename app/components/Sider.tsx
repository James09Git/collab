"use client";
import { url } from "inspector";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleShow } from "../global/slice";

const Sider = ({ nav, set }: any) => {
  const val = useSelector((state: any) => {
    return state.show;
  });
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end relative transition-all duration-300">
      <div className="bg-[#020817] h-[100vh] w-[200px]">
        <div className="flex flex-col items-end p-2 gap-5 md:hidden">
          {nav.map((el: any) => (
            <Link
              href={el.url}
              onClick={() => {
                dispatch(handleShow(true));
              }}
              key={el.id}
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
