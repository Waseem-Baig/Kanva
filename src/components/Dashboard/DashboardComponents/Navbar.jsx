import Image from "next/image";
import React from "react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="flex justify-between px-4 py-2 bg-[linear-gradient(290.78deg,_rgba(55,32,84,0.5)_0%,_rgba(84,32,164,0.5)_100%)] w-full h-auto font-baloo2 text-[#FFFFFF] text-sm rounded-lg items-center gap-6 mb-4 z-0">
      <button onClick={setSidebarOpen}>
        <Image
          src="/svgs/sidebarButton.svg"
          width={25}
          height={25}
          alt="sidebar"
        />
      </button>
      <p className="font-semibold">Hi, Cisco Pvt Ltd </p>
      <p className="font-semibold">
        <span className="text-[#D9D9D9] font-normal">Admin :</span> Waseem
      </p>
      <p className="font-semibold">
        <span className="text-[#D9D9D9] font-normal">Account ID :</span>{" "}
        #245689553
      </p>
      <div className="flex items-center gap-2 bg-[linear-gradient(180deg,_rgba(88,36,166,0.6)_0%,_rgba(101,54,173,0.6)_100%)] rounded-lg px-4 py-3 w-auto flex-grow">
        <Image
          src="/svgs/search.svg"
          width={20}
          height={20}
          alt="Search"
          className="opacity-80"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-white"
        />
      </div>
      <Image src={"/images/Profile.png"} width={70} height={70} alt="Profile" />
    </div>
  );
};

export default Navbar;
