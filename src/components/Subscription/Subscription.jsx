import React from "react";
import Stats from "./SubscriptionComponents/Stats";
import PurchaseHours from "./SubscriptionComponents/PurchaseHours";
import TransactionHistory from "./SubscriptionComponents/TransactionHistory";

const SubscriptionPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex-1">
        <Stats />
      </div>
      <PurchaseHours />
      <TransactionHistory />
    </div>
  );
};

export default SubscriptionPage;
