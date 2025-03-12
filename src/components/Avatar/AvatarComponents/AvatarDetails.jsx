"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const AvatarDetails = ({
  id,
  name,
  gender,
  role,
  status,
  activeHours,
  totalScreens,
  activeScreens,
  avatarSrc,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Toggle popup visibility
  const togglePopup = () => setShowPopup(!showPopup);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reusable gradient and shadow styles
  const gradientShadowStyle =
    "bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(299.53deg,rgba(0,0,0,0)_29.05%,rgba(84,32,164,0.5)_100.44%)] backdrop-blur-[20px] shadow-[0px_30px_60px_0px_#0000001A,0px_15px_30px_0px_#0000000D,0px_5px_10px_0px_#0000000D,0px_50px_100px_0px_#FFFFFF26_inset]";

  return (
    <div className="relative flex flex-col gap-2 w-[46vw] font-baloo2 flex-grow">
      <h1 className="flex justify-start w-full font-bold text-2xl">
        Avatar Home
      </h1>
      <div className="flex min-w-[550px] w-full p-3 rounded-lg flex-col gap-2 h-auto bg-[#05061480] backdrop-blur-[20px] shadow-[0px_5px_10px_#0000000D,0px_15px_30px_#0000000D,0px_30px_60px_#0000001A,inset_0px_50px_100px_#FFFFFF26] border border-[#05061420] flex-grow ">
        {/* Avatar and Details */}
        <div className="flex gap-3 text-sm items-start w-full">
          <Image src={avatarSrc} width={100} height={100} alt="Avatar" />
          <div className="flex flex-col gap-4 font-baloo2 text-[#F5F2FA]">
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{name}</p>
                <p className="text-[#9E9E9E]">({gender})</p>
              </div>
              <div className="flex flex-col gap-1">
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
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-[#9E9E9E]">Avatar ID </p>
                <p className="font-semibold">{id}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#9E9E9E]">Language</p>
                <p className="font-semibold">English</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex gap-3 text-[#FFFFFF] font-baloo2 mt-8">
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

        {/* APIs and Active Status Section */}
        <div className="flex gap-6 w-full mt-10 flex-wrap">
          <div className="flex flex-col gap-1 flex-grow min-w-[250px]">
            <h2 className="font-semibold text-md">APIs</h2>
            <div
              className={`${gradientShadowStyle} w-full flex flex-col gap-4 p-4 rounded-lg`}
            >
              <div className="flex justify-between w-full">
                <p className="text-[#F5F2FA] text-sm">Gemini 1.4 Turbo:</p>
                <p className="text-[#30D158] text-sm">ON</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[#F5F2FA] text-sm">Own DB:</p>
                <p className="text-[#FF453A] text-sm">OFF</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[#F5F2FA] text-sm">Self Sripto Modules:</p>
                <p className="text-[#30D158] text-sm">ON</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-grow min-w-[250px]">
            <h2 className="font-semibold text-md">Active Status</h2>
            <div
              className={`${gradientShadowStyle} w-full flex flex-col gap-4 p-4 rounded-lg`}
            >
              <div className="flex justify-between w-full">
                <p className="text-[#F5F2FA] text-sm">Subtitles:</p>
                <p className="text-[#30D158] text-sm">ON</p>
              </div>
              <div className="flex w-full gap-6">
                <p className="text-[#F5F2FA] text-sm">Language:</p>
                <p className="text-[#FFFFFF] text-sm">English(UK)</p>
              </div>
              <div className="flex w-full gap-6">
                <p className="text-[#F5F2FA] text-sm">Voice:</p>
                <p className="text-[#FFFFFF] text-sm">Cherry Voice (Female)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative cu:absolute mt-16 w-full flex justify-end gap-6 items-center bottom-2 right-4">
          <button className="flex justify-center items-center py-4 px-6 border border-[#FFFFFF80] rounded-lg text-sm font-semibold gap-2 hover:bg-[#5420A480] hover:shadow-[-1px_-2px_6px_0px_#9747FFBF_inset,0px_4px_8px_0px_#0000004D_inset] p-4 hover:border-none">
            Edit Avatar
            <Image src={"/svgs/edit.svg"} width={20} height={20} alt="Edit" />
          </button>
          <button className="flex justify-center items-center py-4 px-6 border border-[#FFFFFF80] rounded-lg text-sm font-semibold gap-2 hover:bg-[#5420A480] hover:shadow-[-1px_-2px_6px_0px_#9747FFBF_inset,0px_4px_8px_0px_#0000004D_inset] p-4 hover:border-none">
            Preview
            <Image
              src={"/svgs/curveArrow.svg"}
              width={20}
              height={20}
              alt="Edit"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDetails;
