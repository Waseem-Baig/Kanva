import Image from "next/image";
import React from "react";

const Changed = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 font-jost">
      <div className="relative bg-[#111219] p-10 rounded-lg shadow-[1px_2px_16px_#9747FF3D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] w-auto min-w-[40vw] h-auto text-white">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl font-semibold text-[#F5F2FA]">
            Password Changed
          </h1>

          {/* Gradient Circle Container */}
          <div className="relative w-[370px] h-[370px] flex justify-center items-center">
            {/* Outer Gradient Circle */}
            <div className="absolute w-full h-full bg-[linear-gradient(180deg,#B584FF_0%,#551DAA_100%)] rounded-full opacity-20 backdrop-blur-[18.555932998657227px]"></div>

            {/* Middle Gradient Circle */}
            <div className="absolute w-[300px] h-[300px] bg-[linear-gradient(180deg,#B584FF_0%,#551DAA_100%)] rounded-full opacity-50"></div>

            {/* Inner Gradient Circle */}
            {/* <div className="absolute w-[230px] h-[230px] bg-[linear-gradient(180deg,#B584FF_0%,#551DAA_100%)] rounded-full opacity-70 shadow-md"></div> */}

            {/* Ellipse 150 */}
            <div className="absolute w-auto flex justify-center items-center">
              <Image
                src={"/svgs/ellipse150.svg"}
                width={200}
                height={200}
                alt="Background"
                className="absolute"
              />
            </div>

            {/* Ellipse 149 */}
            <div className="absolute w-[200px] h-[200px] flex justify-center items-center">
              <Image
                src={"/svgs/ellipse149.svg"}
                width={200}
                height={200}
                alt="Ellipse"
                className="absolute"
              />
            </div>

            {/* Done Icon */}
            <div className="absolute w-[100px] h-[100px] flex justify-center items-center animate-bounce">
              <Image
                src={"/svgs/done.svg"}
                width={100}
                height={100}
                alt="Done"
                className="absolute"
              />
            </div>
          </div>

          {/* Done Button */}
          <button
            className="bg-[#5420A4] text-white py-2 px-10 rounded-md mt-4 hover:bg-[#6a2fc1] transition-colors"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Changed;
