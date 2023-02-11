import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import ProfileHighlights1 from "./ProfileHighlights1";
import AccountInfo from "./AccountInfo";
import Postgrid1 from "./Postgrid1";
import FixbottomNav from "./FixbottomNav";


const Profile1 = () => {
  return (
    <div className="Landing-pg">
      <div className=" flex bg-black py-2 px-4 Profile-Header ">
        <span className="flex-1 flex justify-start text-2xl">
          <AiOutlineSetting />
        </span>
        <span className="flex-1 flex justify-center items-center font-medium text-center ">
          Sarvesh_20 &nbsp; <BsChevronDown />
        </span>
        <span className="flex-1 flex justify-end text-2xl">
          <BiUserPlus />
        </span>
      </div>
      <div className="px-4 pt-[22px] pb-[26px]">
        <div className=" flex items-center mb-4 profile-Top">
          <div className=" w-[76px] h-[76px]  mr-7 rounded-full profile-img">
            <img
              className=" w-full h-full object-cover rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.izScqUc_VJqCQQCI7CcNtwHaGz&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="w-[250px] profile-controls">
            <div className="flex mb-[18px] space-x-3 username">
              <span className="text-xl profile-username">Sarvesh_20</span>
              <span className="flex-1 flex justify-start items-center text-2xl">
                <AiOutlineSetting />
              </span>
            </div>
            <div className=" text-center py-[6px] mb-2 font-semibold text-sm text-black bg-white rounded-lg Edit-btn  ">
              Edit profile
            </div>
            <div className="text-center py-[6px] mb-2 font-semibold text-sm text-black bg-white rounded-lg   ad-btn">
              Ad Tools
            </div>
          </div>
        </div>

        <div className=" text-sm leading-[18px] Profile-Bio">
          <div className="font-bold">Sarvesh Gawade</div>
          <div className=" mt-[2px] -mb-[1px] text-gray-400">Artist</div>
          <div className="mb-[1px] font-semibold">
            Indian Classical/Carnetic/Fusion
          </div>
          <div className=" mb-[1px] font-semibold">
            |Percussionist| Music is the language of spirituality{" "}
          </div>
          <div className=" mb-[1px] text-blue-100 ">
            <a href="https://www.youtube.com/watch?v=tTLP8na9xDk">
              youtube.com/watch?v=tTLP8na9xDk
            </a>
          </div>
        </div>
      </div>
      <ProfileHighlights1/>
      <AccountInfo/>
      <Postgrid1 />
      {/* <div className="fixed bottom-0 w-full py-[10px] bg-black">
        <FixbottomNav/>
      </div> */}
    </div>
  );
};

export default Profile1;
