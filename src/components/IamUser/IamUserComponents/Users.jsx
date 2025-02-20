"use client";
import Image from "next/image";
import React, { useState } from "react";
import users from "../../../../data/userData";
import Popup from "./AddDevice";
import TagInput from "./TagInput";

const Users = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = users.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative">
      {" "}
      {/* Removed blur-sm */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <button
          className="bg-[#5420A4] flex gap-2 justify-center items-center py-3 px-4 rounded-lg"
          onClick={() => setIsPopupOpen(true)}
        >
          <Image src={"/svgs/plus.svg"} width={25} height={25} alt="Add User" />
          <p className="text-[#FFFFFF] font-baloo2 font-semibold">Add user</p>
        </button>
      </div>
      <div className="overflow-x-scroll scrollbar-hide text-[#FFFFFF] text-center">
        <table className="w-full border-collapse bg-[#05061480] shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                S.no
              </th>
              <th className="p-2">Role</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Status
              </th>
              <th className="p-2">Name</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Email
              </th>
              <th className="p-2">Last Activated</th>
              <th className="p-2 bg-gradient-to-b from-[#372054] to-[#5420A4]">
                Created On
              </th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="px-2 py-3">{startIndex + index + 1}</td>
                <td className="px-2 py-3 bg-[#05061480]">{user.role}</td>
                <td
                  className={`px-2 py-3 font-semibold ${
                    user.status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {user.status}
                </td>
                <td className="px-2 py-3 bg-[#05061480]">{user.name}</td>
                <td className="px-2 py-3">{user.email}</td>
                <td className="px-2 py-3 bg-[#05061480]">
                  {user.lastActivated}
                </td>
                <td className="px-2 py-3">{user.createdOn}</td>
                <td className="px-2 py-3 bg-[#05061480] min-w-[230px]">
                  <div className="flex justify-between items-center w-full">
                    <button className="text-[#FF453A] rounded-md p-2 hover:bg-[#FF453A80] hover:text-[#FFFFFF]">
                      Revoke
                    </button>
                    <button className="text-[#0A84FF] rounded-md p-2 hover:bg-[#0A84FF80] hover:text-[#FFFFFF]">
                      Pause
                    </button>
                    <button className="p-2 bg-[#5420A4] text-white rounded-md flex gap-2 items-center w-auto">
                      Edit
                      <Image
                        src={"/svgs/edit.svg"}
                        width={17}
                        height={17}
                        alt="Edit"
                      />
                    </button>
                  </div>
                </td>
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
      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <div className="flex flex-col gap-2 flex-1 mb-4">
            <label className="text-[#F5F2FA] text-md font-semibold">
              Handler Name Tag
            </label>
            <input
              type="text"
              placeholder="Enter name tag of the user"
              className="max-w-[400px] flex-shrink p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787]"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-[#F5F2FA] text-md font-semibold">
              Mail ID
            </label>
            <input
              type="text"
              placeholder="Enter the mail id"
              className="max-w-[400px] flex-shrink p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787]"
            />
          </div>
        </div>

        <p className="font-semibold text-xl mb-2">Select Role</p>

        <div className="flex gap-6 w-full flex-wrap">
          <div className="flex flex-col gap-2 min-w-[400px]">
            <div>
              <p className="text-md">
                Admin will have all similar privileges that Owner
              </p>
              <p className="text-md  pb-1 border-b border-[#9E9E9E]">
                has to this account.
              </p>
            </div>
            <div>
              <p className="text-md">
                Manager can only access to the thing that's owner
              </p>
              <p>allows to access</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <select
              className="max-w-[400px] flex-shrink w-auto p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787] cursor-pointer"
              defaultValue={"Manager"}
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
            <div className="flex flex-col gap-2 flex-1">
              <TagInput />
            </div>
          </div>
        </div>

        <button className="bg-[#5420A4] text-white py-2 px-4 rounded-md w-[30%] ">
          Add New User
        </button>
      </Popup>
    </div>
  );
};

export default Users;
