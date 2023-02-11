import React from "react";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
const FixbottomNav = () => {
  return (
    <div>
      <div className="flex">
        <a
          href="/timeline"
          className="flex-1 flex justify-center items-center text-[28px]"
        >
          <AiOutlineHome />
        </a>
        <a
          href=""
          className="flex-1 flex justify-center items-center text-[28px]"
        >
          < MdOutlineExplore />
        </a>
        <a
          href="/reelstimeline"
          className="flex-1 flex justify-center items-center text-[24px]"
        >
          <BsCameraReels />
        </a>
        <a
          href="/addpostToMyProfile"
          className="flex-1 flex justify-center items-center text-[28px]"
        >
          <MdOutlineAddBox />
        </a>
        <a href="/MyChats"  className="flex-1 flex justify-center items-center text-[28px]">
          <RiMessengerLine />
        </a >
        <div className=" flex-1 flex justify-center items-center text-[28px]">
          <img
            className="object-cover w-[30px] h-[30px] rounded-full "
            src="https://tse4.mm.bing.net/th?id=OIP.izScqUc_VJqCQQCI7CcNtwHaGz&pid=Api&P=0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FixbottomNav;
