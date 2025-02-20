"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Fake transaction data
const fakeTransactions = Array.from({ length: 10 }, (_, i) => ({
  createdOn: `2025-02-${(i % 9) + 1} 14:35`,
  status: i % 3 === 0 ? "Success" : i % 3 === 1 ? "Pending" : "Failed",
  id: `#12${345 + i}`,
  hoursPurchased: (i + 1) * 2,
  amount: `$${(i + 1) * 10}`,
}));

const getStatusColor = (status) => {
  if (status === "Success") return "text-[#30D158]";
  if (status === "Pending") return "text-[#0A84FF]";
  return "text-[#FF453A]";
};

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const transactionsPerPage = 5;
  const totalPages = Math.ceil(fakeTransactions.length / transactionsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (status) => {
    setFilter(status);
    setShowFilter(false);
    setCurrentPage(1);
  };

  const filteredTransactions =
    filter === "All"
      ? fakeTransactions
      : fakeTransactions.filter((txn) => txn.status === filter);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * transactionsPerPage,
    currentPage * transactionsPerPage
  );

  return (
    <div className="flex flex-col w-full text-[#F5F2FA] font-baloo2">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-1 relative">
        <h1 className="text-3xl font-bold font-jost">Transaction History</h1>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-[#05061480] p-3 rounded-lg mr-2 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-[20px]"
        >
          <Image src={"/svgs/filter.svg"} width={20} height={20} alt="Filter" />
        </button>
        {showFilter && (
          <div className="absolute top-12 right-2 bg-[linear-gradient(299.53deg,_#000000_29.05%,_#372054_84.15%,_#5420A4_100.44%)] rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_4px_16px_rgba(151,71,255,0.06)] p-2 w-32 flex flex-col gap-2">
            {["All", "Success", "Pending", "Failed"].map((status) => (
              <button
                key={status}
                onClick={() => handleFilterChange(status)}
                className={`px-4 py-2 hover:bg-[linear-gradient(290.78deg,_rgba(55,32,84,0.5)_0%,_rgba(84,32,164,0.5)_100%)] cursor-pointer rounded-lg text-left ${
                  filter === status
                    ? "bg-[#5420A4] text-white"
                    : "text-gray-400"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-scroll scrollbar-hide text-[#FFFFFF] text-center">
        <table className="w-full border-collapse bg-[#05061480] shadow-md rounded-lg overflow-hidden min-w-[620px]">
          <thead>
            <tr>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Created On
              </th>
              <th className="p-4">Status</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                ID
              </th>
              <th className="p-4">Hours Purchased</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Amount
              </th>
              <th className="p-4">View</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((txn, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-4">{txn.createdOn}</td>
                <td
                  className={`px-2 py-3 bg-[#05061480] ${getStatusColor(
                    txn.status
                  )}`}
                >
                  {txn.status}
                </td>
                <td className="p-4">{txn.id}</td>
                <td className="px-2 py-3 bg-[#05061480]">
                  {txn.hoursPurchased}
                </td>
                <td className="p-4">{txn.amount}</td>
                <td className="px-2 py-3 bg-[#05061480]">
                  <Link
                    href={`/subscription/invoice/INV-${txn.id.replace(
                      "#",
                      ""
                    )}`} // Ensure correct format
                    className="text-[#FFFFFF] bg-[linear-gradient(0deg,#5420A4,#5420A4)] rounded-lg p-2 flex gap-1 items-center justify-center text-sm font-bold"
                  >
                    <span>View</span>
                    <Image
                      src={"/svgs/newtab.svg"}
                      width={17}
                      height={17}
                      alt="New"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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

export default TransactionHistory;
