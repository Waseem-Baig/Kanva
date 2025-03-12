"use client";
import React, { useState } from "react";
import ApisCard from "./ApisCard";
import Image from "next/image"; // Import Image from Next.js
import apiData from "../../../../data/apiData";

const ApisList = () => {
  const itemsPerPage = 6; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = apiData.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* API Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentData.map((api) => (
          <ApisCard
            key={api.id}
            heading={api.heading}
            id={api.id}
            status={api.status}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md bg-[#05061480] disabled:opacity-50"
        >
          <Image
            src="/svgs/leftArrow.svg"
            width={20}
            height={20}
            alt="Previous"
          />
        </button>

        {/* Page Numbers */}
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

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md bg-[#05061480] disabled:opacity-50"
        >
          <Image src="/svgs/rightArrow.svg" width={20} height={20} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ApisList;
