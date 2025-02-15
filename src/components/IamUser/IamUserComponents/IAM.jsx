import React from "react";

const IAM = () => {
  return (
    <div className="flex flex-col bg-[#05061480] gap-2 text-[#FFFFFF] p-2 w-[25%] rounded-lg">
      <p className=" font-baloo2 text-md font-semibold">IAM</p>
      <div
        className="flex justify-between py-2 px-4 bg-[#05061480] rounded-lg shadow-[0px_30px_60px_0px_rgba(0,0,0,0.1),0px_15px_30px_0px_rgba(0,0,0,0.05),0px_5px_10px_0px_rgba(0,0,0,0.05),inset_0px_50px_100px_0px_rgba(255,255,255,0.15)]
"
      >
        <p className="text-lg">Users</p>
        <p className="text-lg">5</p>
      </div>
      <div
        className="flex justify-between py-2 px-4 bg-[#05061480] rounded-lg shadow-[0px_30px_60px_0px_rgba(0,0,0,0.1),0px_15px_30px_0px_rgba(0,0,0,0.05),0px_5px_10px_0px_rgba(0,0,0,0.05),inset_0px_50px_100px_0px_rgba(255,255,255,0.15)]
"
      >
        <p className="text-lg">Admins</p>
        <p className="text-lg">5</p>
      </div>
      <div
        className="flex justify-between py-2 px-4 bg-[#05061480] rounded-lg shadow-[0px_30px_60px_0px_rgba(0,0,0,0.1),0px_15px_30px_0px_rgba(0,0,0,0.05),0px_5px_10px_0px_rgba(0,0,0,0.05),inset_0px_50px_100px_0px_rgba(255,255,255,0.15)]
"
      >
        <p className="text-lg">Managers</p>
        <p className="text-lg">5</p>
      </div>
    </div>
  );
};

export default IAM;
