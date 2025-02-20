"use client";
import Image from "next/image";
import React, { useState } from "react";
import notifications from "../../../../data/notificationsData";
import Link from "next/link";

const NotificationsList = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = notifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center pr-2">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <Link href="/iamuser" className="text-[#FFFFFF] hover:text-[#5420A4]">
          close
        </Link>
      </div>
      <div className="overflow-x-scroll scrollbar-hide text-[#FFFFFF] text-start">
        <table className="w-full border-collapse bg-[#05061480] shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-2 text-start">Message</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((notification, index) => (
              <tr key={notification.id} className="border-t">
                <td className="px-2 py-3 bg-[#05061480]">
                  {notification.message}
                </td>
                <td className="px-2 py-3 text-center">{notification.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md bg-[#05061480] disabled:opacity-50"
        >
          <Image
            src={"/svgs/leftArrow.svg"}
            width={20}
            height={20}
            alt="Previous"
          />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) => {
            if (totalPages <= 3) return true;
            if (currentPage === 1) return page <= 3;
            if (currentPage === totalPages) return page >= totalPages - 2;
            return Math.abs(page - currentPage) <= 1;
          })
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-[#5420A4] text-white"
                  : "bg-[#05061480] text-gray-400"
              }`}
            >
              {page}
            </button>
          ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md bg-[#05061480] disabled:opacity-50"
        >
          <Image
            src={"/svgs/rightArrow.svg"}
            width={20}
            height={20}
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
};

export default NotificationsList;
