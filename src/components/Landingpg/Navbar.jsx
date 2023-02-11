import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div>
      <div className="h-16 flex items-center justify-between border px-4 py-2 text-slate-800">
        <span className=" flex-1 flex items-center justify-center  text-center text-sky-900 hover:cursor-pointer nav-items ">
          <span className="text-2xl">
            <AiFillHome />
          </span>
        </span>
        <span className=" flex-1 flex items-center justify-center text-center text-sky-900 hover:cursor-pointer nav-items ">
          <span className="text-2xl">
            <BiSearch />
          </span>
        </span>
        <span className=" flex-1 flex items-center justify-center text-center text-sky-900 hover:cursor-pointer nav-items ">
          <span className="text-2xl">
            <BsMessenger />
          </span>
        </span>
        <span className=" flex-1 flex items-center justify-center text-center text-sky-900 hover:cursor-pointer nav-items ">
          <span className="text-2xl">
            <GiHamburgerMenu />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
