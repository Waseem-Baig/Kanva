"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component for Next.js
import Changed from "./Changed";

const ChangePassword = ({ isOpen, onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Error message state
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChanged, setIsChanged] = useState(false); // State to track successful password change

  if (!isOpen) return null;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear error and proceed with password change logic
    setError("");
    console.log("Password changed successfully!");
    setIsChanged(true); // Set isChanged to true to render the Changed component
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 font-jost">
      <div className="relative bg-[#111219] p-10 rounded-lg shadow-[1px_2px_16px_#9747FF3D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] w-auto min-w-[40vw] h-auto text-white">
        {/* Close Button */}
        <div className="flex flex-row w-full justify-between items-center mb-8 gap-20">
          <h1 className="text-3xl font-semibold text-[#F5F2FA]">
            Change Password
          </h1>
          <button className="text-white text-3xl" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Render Changed component if password change is successful */}
        {isChanged ? (
          <Changed onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Old Password Field */}
            <div className="flex flex-col gap-2 flex-1 mb-4">
              <label className="text-[#F5F2FA] text-md font-semibold">
                Enter Old Password
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Old Password"
                className="w-auto flex-shrink p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787]"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* New Password Field with Show/Hide Icon */}
            <div className="flex flex-col gap-2 flex-1 mb-4">
              <label className="text-[#F5F2FA] text-md font-semibold">
                Enter New Password
              </label>
              <div className="relative w-auto flex-grow">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  className="w-full p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <Image
                    src={
                      showNewPassword ? "/svgs/show.svg" : "/svgs/hidden.svg"
                    }
                    alt="Toggle Password"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Confirm Password Field with Show/Hide Icon */}
            <div className="flex flex-col gap-2 flex-1 mb-4">
              <label className="text-[#F5F2FA] text-md font-semibold">
                Confirm Password
              </label>
              <div className="relative w-auto flex-grow">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <Image
                    src={
                      showConfirmPassword
                        ? "/svgs/show.svg"
                        : "/svgs/hidden.svg"
                    }
                    alt="Toggle Password"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#5420A4] text-white py-2 px-4 rounded-md mt-4 float-right"
            >
              Change Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
