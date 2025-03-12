import React from "react";

const AvailableDataset = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg p-4 bg-[linear-gradient(290.78deg,rgba(55,32,84,0.5)_0%,rgba(84,32,164,0.5)_100%)] font-jost h-auto max-h-[75vh] overflow-y-auto scrollbar-hide">
      <h1 className="text-2xl font-semibold">Available Dataset</h1>
      <div className="flex flex-col gap-1 flex-grow min-w-[250px]">
        <label htmlFor="apiName" className="text-sm">
          API Name
        </label>
        <select
          id="apiName"
          className="bg-[#F5F2FA] rounded-lg p-3 text-sm placeholder:text-[#878787] max-w-[40vw] w-full appearance-none focus:outline-none text-[#101010]"
        >
          <option value="option" disabled className="bg-[#5420A4]">
            Choose from Saved List
          </option>
          {/* Add more options here */}
          <option value="option1" className="bg-[#5420A4] text-[#F5F2FA]">
            OASIS _ REGITER DATA
          </option>
          <option value="option2" className="bg-[#5420A4] text-[#F5F2FA]">
            ADMISSION Q&S
          </option>
        </select>
      </div>
      <div className="flex justify-end items-center w-full">
        <button className="px-8 py-3 bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] rounded-lg mt-8 min-w-[200px] text-center">
          Add to response order
        </button>
      </div>
    </div>
  );
};

export default AvailableDataset;
