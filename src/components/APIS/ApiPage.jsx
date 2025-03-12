import React from "react";
import Stats from "./ApiComponents/Stats";
import Create from "./ApiComponents/Create";
import ApisCard from "./ApiComponents/ApisCard";
import ApisList from "./ApiComponents/ApisList";

const ApiPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full font-baloo2 text-sm">
      <Stats />
      <Create />
      <ApisList />
    </div>
  );
};

export default ApiPage;
