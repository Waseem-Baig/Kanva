"use client";
import Navbar from "@/components/Dashboard/DashboardComponents/Navbar";
import Terms from "@/components/Terms&Conditions/Terms";
import React from "react";

const TermsAndconditions = () => {
  return (
    <div
      className="flex flex-col gap-2 w-full h-screen py-4 px-6 overflow-y-scroll scrollbar-hide relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Background.png')" }}
    >
      <Navbar classes={"hidden"} />
      <Terms />
    </div>
  );
};

export default TermsAndconditions;
