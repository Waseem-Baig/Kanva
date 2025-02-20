import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full h-auto font-baloo2 z-0">
      {/* Box 1 */}
      <div className="flex flex-col justify-between bg-[rgba(5,6,20,0.5)] gap-4 py-4 px-2 rounded-lg h-auto w-[12vw] min-w-[220px] flex-grow">
        <p className="text-white font-bold">Time Remaining</p>
        <div className="flex gap-2">
          <div className="bg-[linear-gradient(290.78deg,_rgba(55,32,84,0.5)_0%,_rgba(84,32,164,0.5)_100%)] flex justify-center items-center py-2 w-full rounded-lg">
            <p className="font-baloo2 text-[#FFFFFF] text-lg">12 hrs</p>
          </div>
          <button className="flex justify-center items-center py-2 px-4 bg-[#5420A4] rounded-lg">
            <Image src="/svgs/add.svg" width={20} height={20} alt="add" />
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col justify-between bg-[rgba(5,6,20,0.5)] gap-4 py-4 px-2 rounded-lg h-auto w-[12vw] min-w-[220px] flex-grow">
        <h3 className="text-white font-bold">Ends at</h3>
        <p className="">
          <span className="text-white font-jost text-xl font-semibold">
            234
          </span>{" "}
          <span className="text-[#D3D3D3] text-sm">Hours</span>{" "}
          <span className="text-[#FF453A] text-sm">(Extremely Low)</span>
        </p>
        <p className="text-white">
          January 12th,2025{" "}
          <span className="text-[#9E9E9E] text-sm">2:00 PM</span>
        </p>
      </div>
    </div>
  );
};

export default Stats;
