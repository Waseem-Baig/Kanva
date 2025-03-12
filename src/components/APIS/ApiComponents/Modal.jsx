"use client";
import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, onClose, selectedTab, setSelectedTab, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-baloo2">
      {/* Overlay with blur effect */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#101010] border-[#FFFFFF12] text-white p-6 rounded-lg w-full max-w-[85vw] backdrop-blur-[20px] shadow-[0px_30px_60px_0px_#0000001A,0px_15px_30px_0px_#0000000D,0px_5px_10px_0px_#0000000D,0px_50px_100px_0px_#FFFFFF26_inset] z-10 flex flex-col gap-4">
        {/* Close Button (Positioned to Top-Right) */}
        <button onClick={onClose} className="absolute top-4 right-6">
          <Image src={"/svgs/close.svg"} width={20} height={20} alt="Close" />
        </button>

        {/* Modal Tabs */}
        <div className="w-full flex justify-between items-center gap-6 flex-wrap mt-6">
          {["ownApi", "savedDatasets", "createNew"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`${
                selectedTab === tab
                  ? "bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)]"
                  : "bg-[linear-gradient(0deg,rgba(84,32,164,0.2),rgba(84,32,164,0.2)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)]"
              } text-[#FFFFFF] py-3 flex-grow rounded-lg min-w-[200px]`}
            >
              {tab === "ownApi"
                ? "OWN API"
                : tab === "savedDatasets"
                ? "Saved Datasets"
                : "Create New Data Res"}
            </button>
          ))}
        </div>

        {/* Modal Content */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
