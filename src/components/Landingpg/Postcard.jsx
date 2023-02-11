import React from "react";
import { GrLocation } from "react-icons/gr";
import{FiHeart} from 'react-icons/fi'
import{FaRegCommentDots} from 'react-icons/fa'
import{RiSendPlaneLine} from 'react-icons/ri'
import{HiOutlineClipboard} from 'react-icons/hi'


const Postcard = () => {
  return (
    <div className="h-[87vh]">
      <div className="  py-2 m-2 rounded-xl ">
        <div className=" px-3 my-4 flex font-bold ">
          <span className=" w-[20px] px-6 py-2 bg-slate-600 mr-2 rounded-full"></span>
          <div>
              <span>Shaharukh Khan</span>
            <div className="flex items-center mb-2 space-x-1 text-xs ">
              <span>
                <GrLocation />
              </span>
              <span>Wadala</span>
            </div>
          </div>
        </div>

        <div className="text-sm px-2 mb-4">
          Caption - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Temporibus id perferendis reprehenderit beatae rem eos repudiandae
          voluptatum ratione animi quasi.
        </div>
        <div className="w-full">
          <img className="w-full" src="https://i0.wp.com/wallpapercave.com/wp/wp6974608.jpg" alt="chitra" />
        </div>
        <div className=" flex justify-between text-3xl">
          <span className="flex space-x-4">
            <span><FiHeart/></span>
            <span><FaRegCommentDots/></span>
            <span><RiSendPlaneLine/></span>
          </span>
          <span><HiOutlineClipboard/></span>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
