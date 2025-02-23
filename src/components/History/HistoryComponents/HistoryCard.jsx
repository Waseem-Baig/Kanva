import React from "react";

const HistoryCard = ({ avatar, screen, loginTime, status, billingTime }) => {
  // Define status colors dynamically
  const statusColors = {
    Active: "text-[#30D158]", // Green
    Paused: "text-[#0A84FF]", // Blue
    Inactive: "text-[#FF453A]", // Red
  };

  return (
    <div className="relative flex flex-col items-start justify-center w-auto min-w-[300px] text-[#F5F2FA] font-baloo2 bg-[#05061480] rounded-lg p-4 backdrop-blur-[20px] shadow-[0px_50px_100px_#ffffff26_inset,0px_30px_60px_#0000001A,0px_15px_30px_#0000000D,0px_5px_10px_#4A1D1D0D] flex-grow gap-1">
      {billingTime < 500 && (
        <p className="text-[#F5F2FA] bg-[#FF453A80] rounded-lg p-2 absolute top-0 right-0">
          Insufficient hours
        </p>
      )}
      <p>
        <span className="text-[#D3D3D3] text-sm">Avatar:</span> {avatar}
      </p>
      <p>
        <span className="text-[#D3D3D3] text-sm">Screen:</span> {screen}
      </p>
      <p>
        <span className="text-[#D3D3D3] text-sm">Login Time:</span> {loginTime}
      </p>
      <p>
        <span className="text-[#D3D3D3] text-sm">Status:</span>{" "}
        <span className={statusColors[status] || "text-white"}>{status}</span>
      </p>
      <p>
        <span className="text-[#D3D3D3] text-sm">Total Billing Time:</span>{" "}
        {billingTime} Hours
      </p>
    </div>
  );
};

export default HistoryCard;
