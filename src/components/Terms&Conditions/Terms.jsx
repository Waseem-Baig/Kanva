import React from "react";
import TermsNavbar from "./Terms&ConditionsComponents/TermsNavbar";
import TermsAndConditions from "./Terms&ConditionsComponents/TermsAndConditions";

const Terms = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <TermsNavbar />
      <TermsAndConditions />
    </div>
  );
};

export default Terms;
