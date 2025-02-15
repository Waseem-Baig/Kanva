import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div className="flex flex-col w-full gap-3 rounded-lg bg-[#05061480] p-2 text-[#FFFFFF] font-baloo2 text-sm">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">Notifications</p>
        <Link href="/notifications" className="text-[#F5F2FA]">
          View all
        </Link>
      </div>
      <div className="flex justify-between pb-1 border-b border-[#9E9E9E]">
        <p className="text-[#F5F2FA]">
          New User created !! Aditya Raghu manager role is created
          successfully!!
        </p>
        <p className="text-[#9E9E9E]">Now</p>
      </div>
      <div className="flex justify-between pb-1 border-b border-[#9E9E9E]">
        <p className="text-[#F5F2FA]">Sri Vardhan 113 logged in 15mins ago</p>
        <p className="text-[#9E9E9E]">21hr ago</p>
      </div>
      <div className="flex justify-between pb-1 border-b border-[#9E9E9E]">
        <p className="text-[#F5F2FA]">
          sahrath123 changed the cb portico (avatar) APIs key
        </p>
        <p className="text-[#9E9E9E]">15/12/2024</p>
      </div>
      <div className="flex justify-between pb-1 border-b border-[#9E9E9E]">
        <p className="text-[#F5F2FA]">
          Vamshi (Admin) added 1500hours newly into the account
        </p>
        <p className="text-[#9E9E9E]">14/12/2024</p>
      </div>
    </div>
  );
};

export default Notifications;
