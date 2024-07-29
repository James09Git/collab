"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdCancel, MdMenu } from "react-icons/md";
import Sider from "./Sider";
import { useDispatch, useSelector } from "react-redux";
import { handleShow } from "../global/slice";

const Header = () => {
  const navs = [
    { id: 0, name: "Caleb", url: "/caleb" },
    { id: 1, name: "Gomenti", url: "/gomenti" },
    { id: 2, name: "Rasheedat", url: "/rasheedat" },
    { id: 3, name: "Terry", url: "/terry" },
    { id: 4, name: "Odinaka", url: "/odinaka" },
    { id: 5, name: "Fedora", url: "/feddy" },
    { id: 6, name: "McDavid", url: "/b" },
    { id: 7, name: "Sonia", url: "/sonia" },
    { id: 8, name: "Jessica", url: "/jessica" },
  ];
  const val = useSelector((state: any) => {
    return state.show;
  });
  const dispatch = useDispatch();
  console.log(val);

  return (
    <div className="md:px-24 md:h-[70px] px-10 py-5 bg-[#020817]">
      <div className="md:flex justify-between gap-5 hidden">
        {navs.map((el: any) => (
          <Link
            key={el.id}
            href={el.url}
            className="hover:underline text-[13px] font-semibold text-white"
          >
            {el.name}
          </Link>
        ))}
      </div>

      <div className="flex justify-end items-center">
        {val ? (
          <div className="flex flex-col">
            <MdMenu
              onClick={() => {
                dispatch(handleShow(false));
              }}
              className="text-white text-[40px] block md:hidden"
            />
          </div>
        ) : (
          <div className="flex justify-end items-end flex-col gap-10">
            <div className="flex flex-col">
              <MdCancel
                onClick={() => {
                  dispatch(handleShow(true));
                }}
                className="text-white text-[40px] block md:hidden"
              />
            </div>
            {val ? "" : <Sider nav={navs} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
