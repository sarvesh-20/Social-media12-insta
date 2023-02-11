import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileHighlights1 = () => {
  return (
    <div className=" ProfileHighlights1 ">
      <div className="flex overflow-hidden">
        <div className="flex flex-col items-center justify-start pl-1 mr-2 1st Highlight">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/Sunset-HD-Wallpaper-Free-download.jpg"
              alt="Nature"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200">Nature.....</div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 2nd Highlight">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100 ">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://1.bp.blogspot.com/-xzBkX31AFEE/XcUA1Xau7GI/AAAAAAAATZE/bDfzuSj8JDcSp_DNSwurP_eJdNDo-tlmQCLcBGAsYHQ/s1600/ra%2Bfamily%2Bchasing%2Bsunset%2Bin%2Bseminyak%2Bbeach_001.jpg"
              alt="Famjam"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200">Famjam....</div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 3rd Highlight">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.pinimg.com/originals/c0/22/d6/c022d6e83853b90c48196afd121d6dca.jpg"
              alt="Roadtrip"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200">
            Roadtrip....
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 4th Highlight">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://c8.alamy.com/comp/2G6JK8M/harmonium-keys-with-vintage-looks-stock-image-selective-focus-2G6JK8M.jpg"
              alt="Nature"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200">Music....</div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 5th Highlight">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8XPZrd2fv_2a6R2RaY8JWa9DbP6Y5W2l0cpSfGINqyxTxztZriIWEYrN4XjaTHsMmrc&usqp=CAU"
              alt="Nature"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200">Concerts...</div>
        </div>
        <div className="flex flex-col items-center justify-start Add tag">
          <div className="w-[56px] h-[56px] mb-[6px] rounded-full border border-gray-100 flex justify-center items-center text-3xl">
            <AiOutlinePlus />
          </div>
          <div className=" text-xs font-semibold  text-gray-200 ">New...</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHighlights1;
