"use client";
import Statistics from "./DashboardComponents/statistics";
import AvatarList from "./DashboardComponents/AvatarPage";

const DashBoardPage = () => {
  return (
    <div>
      <div className="flex-1">
        <Statistics />
      </div>

      {/* AvatarList - Takes 1/3 of space on large screens */}
      <div className="w-full">
        <AvatarList />
      </div>
    </div>
  );
};

export default DashBoardPage;
