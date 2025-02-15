"use client";
import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 font-jost">
      <div className="relative bg-[#111219] p-10 rounded-lg shadow-[1px_2px_16px_#9747FF3D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] w-auto h-auto text-white">
        {/* Close Button */}
        <div className="flex flex-row w-full justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-[#F5F2FA]">
            Add New User
          </h1>
          <button className="text-white text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Popup Content */}
        {children}
      </div>
    </div>
  );
};

export default Popup;
