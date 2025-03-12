import Link from "next/link";
import React from "react";
import { statsData } from "../../../../data/statsData"; // Import stats data
import { apiStatusData } from "../../../../data/apiStatusData"; // Import API status data

const Stats = () => {
  return (
    <div className="flex gap-6 justify-between w-full flex-wrap">
      {/* Response Order Section */}
      <div className="bg-[#05061480] rounded-lg p-4 w-auto min-w-[23vw] flex-grow h-[220px] overflow-y-auto scrollbar-hide flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[#FFFFFF] font-semibold">Response Order</h2>
          <Link
            href={"/apis/responseOrder"}
            className="underline text-[#F5F2FA] hover:text-[#5420A4]"
          >
            Change Order
          </Link>
        </div>

        {/* Map through the statsData array */}
        {statsData.map((entry, index) => (
          <div key={entry.id} className="w-full flex gap-4 items-center">
            <div className="flex justify-center items-center px-4 py-3 bg-[#05061480] rounded-md font-bold">
              {index + 1} {/* Display the order number */}
            </div>
            <div className="flex w-full justify-start items-center px-2 py-3 bg-[#05061480] rounded-md">
              {entry.name}{" "}
              <span className="text-[#9E9E9E]">{entry.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* API Status Section */}
      <div className="bg-[#05061480] rounded-lg p-4 min-w-[47vw] w-auto h-[220px] flex-grow overflow-y-auto scrollbar-hide flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[#FFFFFF] font-semibold">API Status</h2>
          <Link
            href={"/apis/apiStatus"}
            className="underline text-[#F5F2FA] hover:text-[#5420A4]"
          >
            View All
          </Link>
        </div>

        {/* Map through the apiStatusData array */}
        {apiStatusData.map((status) => (
          <div
            key={status.id}
            className="flex justify-start py-2 border-b text-[#F5F2FA]"
          >
            <p>{status.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
