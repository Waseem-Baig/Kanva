"use client";
import Image from "next/image";
import React, { useState } from "react";

const PurchaseHours = () => {
  const [duration, setDuration] = useState("");
  const [selectedHours, setSelectedHours] = useState(100);
  const pricePerHour = 5;

  const handleArrowClick = () => {
    const parsedValue = parseInt(duration);
    if (!isNaN(parsedValue)) {
      setSelectedHours(parsedValue);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full text-[#FFFFFF] text-sm font-jost">
      <h1 className="text-2xl font-bold">Purchase Hours</h1>
      <div className="flex w-full flex-col gap-4 p-6 bg-[#05061480] rounded-lg">
        <div className="flex w-full justify-between items-center flex-wrap gap-8 lg:flex-nowrap">
          <div className="flex flex-col gap-3 min-w-[300px] w-[40%] flex-grow">
            <h2 className="text-xl font-semibold">Extend duration</h2>
            <div className="flex gap-2 w-full mb-2">
              <div className="flex items-center gap-2 bg-[linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0.1)_100%)] rounded-lg px-4 py-3 w-auto flex-grow backdrop-blur-[20px]">
                <Image
                  src="/svgs/search.svg"
                  width={20}
                  height={20}
                  alt="Search"
                  className="opacity-80"
                />
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Enter the duration you want to increase"
                  className="bg-transparent outline-none text-white w-full placeholder:text-[#D3D3D3]"
                />
              </div>
              <button
                onClick={handleArrowClick}
                className="flex justify-center items-center p-3 bg-[#5420A4] backdrop-blur-[20px] rounded-lg"
              >
                <Image
                  src="/svgs/rightArrow.svg"
                  width={20}
                  height={20}
                  alt="Set Hours"
                />
              </button>
            </div>
            <h3 className="text-lg font-medium">Pick duration to Add-on</h3>
            <div className="flex flex-wrap justify-around gap-3">
              {[24, 48, 100, 138, 336, 504, 672].map((hour) => (
                <button
                  key={hour}
                  onClick={() => setSelectedHours(hour)}
                  className={`flex justify-center items-center py-3 px-6 rounded-lg shadow-[0px_10px_10px_0px_#0000001A] backdrop-blur-[20px] ${
                    selectedHours === hour
                      ? "bg-[#5420A4]"
                      : "bg-[linear-gradient(0deg,rgba(84,32,164,0.1),rgba(84,32,164,0.1)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)]"
                  }`}
                >
                  <p className="text-md font-bold">{hour}</p>
                </button>
              ))}
              <button className="flex justify-center items-center py-3 px-6 rounded-lg shadow-[0px_10px_10px_0px_#0000001A] backdrop-blur-[20px] bg-[#5420A4]">
                <Image
                  src={"/svgs/plus.svg"}
                  width={20}
                  height={20}
                  alt="Add"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-6 min-w-[400px] w-[55%] bg-[linear-gradient(290.78deg,_rgba(55,_32,_84,_0.5)_0%,_rgba(84,_32,_164,_0.5)_100%)] rounded-lg backdrop-blur-[20px] p-6">
            <p className="text-[#D3D3D3] text-lg font-bold">$5 per Hour</p>
            <div className="flex w-full justify-between items-center pb-10 border-b border-[#9E9E9E] border-dashed">
              <div className="flex gap-6 items-center">
                <p className="text-[#F5F2FA] text-[1.7rem] font-bold">
                  {selectedHours}{" "}
                  <span className="text-[#9E9E9E] text-sm">hours</span>
                </p>
                <p className="text-3xl font-bold bg-[linear-gradient(299.53deg,#000000_29.05%,#372054_84.15%,#5420A4_100.44%)] bg-clip-text text-transparent">
                  x
                </p>
                <p className="text-[#F5F2FA] text-[1.7rem] font-bold">
                  ${pricePerHour}
                </p>
                <p className="text-3xl font-bold bg-[linear-gradient(299.53deg,#000000_29.05%,#372054_84.15%,#5420A4_100.44%)] bg-clip-text text-transparent">
                  =
                </p>
              </div>
              <div className="p-3">
                <p className="text-[#F5F2FA] font-bold text-[1.7rem]">
                  ${selectedHours * pricePerHour}
                </p>
              </div>
            </div>
            <div className="mt-3 flex w-full justify-between items-center">
              <p className="text-[#F5F2FA] font-bold text-[1.7rem]">Total</p>
              <p className="text-[#F5F2FA] font-bold text-[1.7rem]">
                ${selectedHours * pricePerHour}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#5420A4] rounded-lg p-3 text-[#FFFFFF] text-md font-baloo2">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHours;
