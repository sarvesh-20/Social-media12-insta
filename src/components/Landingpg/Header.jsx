import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex p-4 text-2xl bg-yellow-400">
      <span className="flex-1  text-slate-700">
        <GiHamburgerMenu />
      </span>
      <span className="flex-1 text-xl font-bold flex justify-center  text-red-900">DedsoGram</span>
      <span className="flex-1 flex justify-end text-slate-700">
        <AiOutlineUser />
      </span>
    </div>
  );
};

export default Header;
