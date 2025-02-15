import Image from "next/image";
import React from "react";

const AvatarCard = ({
  name,
  gender,
  role,
  status,
  activeHours,
  totalScreens,
  activeScreens,
  avatarSrc,
}) => {
  return (
    <div className="relative flex min-w-[320px] w-fit p-3 rounded-lg flex-col gap-2 h-auto bg-[#05061480] backdrop-blur-[20px] shadow-[0px_5px_10px_#0000000D,0px_15px_30px_#0000000D,0px_30px_60px_#0000001A,inset_0px_50px_100px_#FFFFFF26] border border-[#05061420]">
      {/* Three-Dot Button Positioned at the Top-Right */}
      <button className="absolute top-2 right-2">
        <Image src="/svgs/threeDots.svg" width={20} height={20} alt="Options" />
      </button>

      <div className="flex gap-3 text-sm items-start w-full">
        <Image src={avatarSrc} width={100} height={100} alt="Avatar" />
        <div className="flex flex-col gap-1 font-baloo2 text-[#F5F2FA]">
          <p className="font-semibold">{name}</p>
          <p className="text-[#D3D3D3]">({gender})</p>
          <p className="font-semibold">{role}</p>
          <p
            className={`text-sm font-bold ${
              status === "Active" ? "text-[#30D158]" : "text-[#FF3B30]"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex gap-3 text-[#FFFFFF] font-baloo2">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Active Since</p>
          <p className="font-bold text-[2rem]">
            {activeHours}{" "}
            <span className="text-[#D3D3D3] text-sm font-normal">Hours</span>
          </p>
        </div>
        <div className="bg-[#05061480] p-2 shadow-[inset_-1px_-2px_6px_#9747FFBF,inset_0px_4px_8px_#0000004D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] backdrop-blur-[20px] border border-[#5824A6] rounded-md flex justify-center items-center flex-col">
          <p className="text-[#9E9E9E] text-sm">Total Screens</p>
          <p className="text-[#F5F2FA] text-md">{totalScreens}</p>
        </div>
        <div className="bg-[#05061480] p-2 shadow-[inset_-1px_-2px_6px_#9747FFBF,inset_0px_4px_8px_#0000004D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] backdrop-blur-[20px] border border-[#5824A6] rounded-md flex justify-center items-center flex-col">
          <p className="text-[#9E9E9E] text-sm">Active Screens</p>
          <p className="text-[#F5F2FA] text-md">{activeScreens}</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
