import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ setSidebarOpen, classes }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  // Function to close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between px-4 py-2 bg-[linear-gradient(290.78deg,_rgba(55,32,84,0.5)_0%,_rgba(84,32,164,0.5)_100%)] w-full h-auto font-baloo2 text-[#FFFFFF] text-sm rounded-lg items-center gap-6 mb-4 z-10 relative">
      <button
        onClick={setSidebarOpen}
        className={`${classes} hover:bg-[linear-gradient(180deg,rgba(88,36,166,0.8)_0%,rgba(101,54,173,0.8)_100%)] rounded-lg p-4 hover:backdrop-blur-[20px] hover:shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D]`}
      >
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
          className="bg-transparent outline-none text-white placeholder-white w-full"
        />
      </div>

      {/* Profile Button */}
      <div className="relative" ref={popupRef}>
        <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <Image
            src={"/images/Profile.png"}
            width={70}
            height={70}
            alt="Profile"
          />
        </button>

        {/* Popup Menu */}
        {isPopupOpen && (
          <div className="absolute right-0 mt-2 w-auto pr-8 pl-1 bg-[#101010] shadow-lg rounded-lg py-2 text-[#F5F2FA] z-50 flex flex-col gap-2">
            <Link
              href={"/profile"}
              className="px-4 py-3 rounded-lg hover:bg-[radial-gradient(80.74%_141.53%_at_0%_49.21%,_rgba(159,121,217,0.3)_20%,_rgba(84,32,164,0.3)_65%,_rgba(0,0,0,0)_100%)] hover:duration-500 flex gap-1 justify-start items-center"
            >
              <Image
                src="/svgs/profile.svg"
                width={20}
                height={20}
                alt="Profile"
              />
              <p>Profile</p>
            </Link>
            <Link
              href={"/settings"}
              className="px-4 py-3 rounded-lg hover:bg-[radial-gradient(80.74%_141.53%_at_0%_49.21%,_rgba(159,121,217,0.3)_20%,_rgba(84,32,164,0.3)_65%,_rgba(0,0,0,0)_100%)] hover:duration-500 flex gap-1 justify-start items-center"
            >
              <Image
                src="/svgs/settings.svg"
                width={20}
                height={20}
                alt="Settings"
              />
              <p>Settings</p>
            </Link>
            <Link
              href={"/login"}
              className="px-4 py-3 rounded-lg hover:bg-[radial-gradient(80.74%_141.53%_at_0%_49.21%,_rgba(159,121,217,0.3)_20%,_rgba(84,32,164,0.3)_65%,_rgba(0,0,0,0)_100%)] hover:duration-500 text-[#FF453A] flex gap-1 justify-start items-center"
              onClick={() => alert("Logged out")}
            >
              <Image
                src="/svgs/logout.svg"
                width={20}
                height={20}
                alt="Logout"
              />
              <p>Logout</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
