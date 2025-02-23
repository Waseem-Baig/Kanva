import React, { useState } from "react";
import HistoryCard from "./HistoryCard";
import historyData from "../../../../data/historyData";

const HistoryList = () => {
  const [hData, setHData] = useState(historyData);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#FFFFFF] font-bold font-baloo2 text-[1.7rem]">
        History
      </p>
      <div className="flex flex-wrap gap-4 justify-around">
        {hData.map((data, index) => (
          <HistoryCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
