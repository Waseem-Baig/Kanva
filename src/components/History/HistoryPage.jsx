"use client";
import React from "react";
import HistoryCard from "./HistoryComponents/HistoryCard";
import HistoryList from "./HistoryComponents/HistoryList";

const HistoryPage = () => {
  return (
    <div className="flex-1">
      <HistoryList />
    </div>
  );
};

export default HistoryPage;
