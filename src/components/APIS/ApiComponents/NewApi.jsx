import Image from "next/image";
import React, { useState } from "react";

const NewApi = () => {
  // State to manage visibility of the "Test API" button and new content
  const [isTested, setIsTested] = useState(false);

  // Function to handle the "Test API" button click
  const handleTestApiClick = () => {
    setIsTested(true); // Hide the button and show new content
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-lg p-4 bg-[linear-gradient(290.78deg,rgba(55,32,84,0.5)_0%,rgba(84,32,164,0.5)_100%)] font-jost h-auto max-h-[75vh] overflow-y-auto scrollbar-hide">
      <h1 className="text-2xl font-semibold">New API</h1>

      <div className="flex justify-between w-full items-center gap-4 flex-wrap">
        {/* API Name Input */}
        <div className="flex flex-col gap-1 flex-grow min-w-[250px]">
          <label htmlFor="apiName" className="text-sm">
            API Name
          </label>
          <input
            type="text"
            id="apiName"
            className="bg-[#F5F2FA] rounded-lg p-3 text-sm placeholder:text-[#878787] w-full"
            placeholder="Enter API Name"
          />
        </div>

        {/* API Input */}
        <div className="flex flex-col gap-1 flex-grow min-w-[250px]">
          <label htmlFor="apiUrl" className="text-sm">
            API
          </label>
          <input
            type="text"
            id="apiUrl"
            className="bg-[#F5F2FA] rounded-lg p-3 text-sm placeholder:text-[#878787] w-full"
            placeholder="Enter the API"
          />
        </div>

        {/* Paste API Button */}
        <div className="flex justify-center items-end self-end">
          <button className="p-3 border border-[#FFFFFF80] flex justify-center items-center gap-2 rounded-lg min-w-[120px] hover:bg-[#5420A480] hover:border-none hover:shadow-[-1px_-2px_6px_0px_#9747FFBF_inset,0px_4px_8px_0px_#0000004D_inset]">
            Paste API
            <Image src={"/svgs/paste.svg"} width={20} height={20} alt="Paste" />
          </button>
        </div>
      </div>

      {/* Conditionally render the "Test API" button or new content */}
      {!isTested ? (
        <div className="flex justify-end items-center">
          <button
            onClick={handleTestApiClick}
            className="px-8 py-3 bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] rounded-lg mt-8 min-w-[200px] text-center"
          >
            Test API
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-semibold text-lg">
                Enter the Structure/ Documentation/ Functions of API
              </h2>
              <button className="px-8 py-3 bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] rounded-lg min-w-[200px] text-center">
                Test
              </button>
            </div>
            <textarea
              className="bg-black/40 bg-blend-overlay linear-[35.22deg,rgba(255,255,255,0)_33.61%,#FFFFFF_89.19%] p-4 rounded-lg shadow-[inset_-1px_-2px_6px_0px_#9747FFBF,inset_0px_4px_8px_0px_#0000004D,0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D] backdrop-blur-[20px] h-[250px] border border-[#FFFFFF12] text-white w-full resize-none focus:outline-none"
              placeholder="Enter commands here..."
            ></textarea>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Test Log</h2>
              <button className="px-8 py-3 bg-[#23A420] rounded-lg min-w-[200px] text-center flex justify-center items-center gap-2">
                <Image
                  src={"/svgs/success.svg"}
                  width={20}
                  height={20}
                  alt="Success"
                />
                Success
              </button>
            </div>
            <div className="bg-blend-overlay bg-[#FFFFFF12] p-4 w-full h-[250px] rounded-lg shadow-[-1px_-2px_6px_0px_#9747FFBF_inset,0px_4px_8px_0px_#0000004D_inset,0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D] backdrop-blur-[20px]"></div>
            <div className="flex justify-end items-center gap-4 w-full">
              <button
                className="px-8 py-3 bg-[#FF453A80] rounded-lg min-w-[200px] text-center"
                onClick={() => setIsTested(false)}
              >
                Decline
              </button>
              <button className="px-8 py-3 bg-[#23A420] rounded-lg min-w-[200px] text-center">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewApi;
