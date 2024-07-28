import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const navs = [
    { id: 0, name: "Caleb", url: "/caleb" },
    { id: 1, name: "Gomenti", url: "/gomenti" },
    { id: 2, name: "Rasheedat", url: "/rasheedat" },
    { id: 3, name: "Terry", url: "/terry" },
    { id: 4, name: "Odinaka", url: "/odinaka" },
    { id: 5, name: "Fedora", url: "/fedora" },
    { id: 6, name: "McDavid", url: "/caleb" },
    { id: 7, name: "Sonia", url: "/caleb" },
    { id: 8, name: "Jessica", url: "/caleb" },
  ];
  return (
    <div className="md:px-24 px-10 py-5 bg-[#020817]">
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
        <MdMenu className="text-white text-[40px] block md:hidden" />
      </div>
    </div>
  );
};

export default Header;
