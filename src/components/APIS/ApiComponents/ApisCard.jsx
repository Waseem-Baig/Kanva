import Image from "next/image";
import React from "react";

const ApisCard = ({ heading, id, status }) => {
  return (
    <div className="group relative flex flex-col bg-[#00000080] gap-3 pt-8 pb-6 px-6 rounded-lg shadow-[0px_30px_60px_#0000001A,0px_15px_30px_#0000000D,0px_5px_10px_#00000040,0px_50px_100px_#FFFFFF26_inset] backdrop-blur-[20px] justify-center items-center font-baloo2 text-[#FFFFFF] transition-all duration-300">
      {/* Heading that moves up on hover */}
      <h2 className="text-center font-jost font-semibold text-2xl transform transition-all duration-300 group-hover:-translate-y-3 group-hover:text-sm">
        {heading}
      </h2>

      {/* Image section that appears from bottom smoothly */}
      <div className="flex flex-col gap-1 items-center transform scale-y-0 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
        <div className="flex">
          <Image
            src={"/svgs/PolygonLeft.svg"}
            width={10}
            height={10}
            alt="Left"
          />
          <Image
            src={"/svgs/robo.svg"}
            width={60}
            height={60}
            alt="Robo"
            className="bg-[#D9D9D9] p-1 rounded-lg"
          />
          <Image
            src={"/svgs/PolygonRight.svg"}
            width={10}
            height={10}
            alt="Right"
          />
        </div>
        <Image
          src={"/svgs/floatingLines.svg"}
          width={40}
          height={40}
          alt="Floating Lines"
        />
      </div>

      {/* ID Section */}
      <div className="flex px-4 py-3 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] rounded-lg">
        {id}
      </div>

      {/* Status Section */}
      <div className="flex gap-2 p-3 justify-center items-center font-semibold rounded-lg bg-[linear-gradient(0deg,#5420A4,#5420A4),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] w-full">
        <span>Status</span>
        <span>:</span>
        <span>{status}</span>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center w-full bg-[linear-gradient(290.78deg,rgba(55,32,84,0.5)_0%,rgba(84,32,164,0.5)_100%)] rounded-lg p-3">
        <button className="">Refresh</button>
        <button className="text-[#FF453A]">Revoke</button>
        <button className="text-[#0A84FF]">Pause</button>
      </div>
    </div>
  );
};

export default ApisCard;
