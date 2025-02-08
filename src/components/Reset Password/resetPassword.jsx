"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Reset = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisibility((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "newPassword") setNewPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (newPassword !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }
    router.push("/login");
  };

  return (
    <div className="relative w-screen h-screen font-dm-sans">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/loginVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex items-center justify-end w-full h-full pr-8">
        <div className="bg-[linear-gradient(299.53deg,rgba(0,0,0,0.8)_29.05%,rgba(55,32,84,0.8)_84.15%,rgba(84,32,164,0.8)_100.44%)] w-[30%] p-8 rounded-lg shadow-md backdrop-blur-sm">
          <h1 className="font-jost font-bold text-4xl bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text text-center py-4 text-[3rem]">
            KANVA
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 pt-4 w-full"
          >
            <h2 className="font-dm-sans text-[#F5F2FA] font-bold text-center text-[1.5rem]">
              Reset Password
            </h2>

            {/* New Password Input */}
            <div>
              <div className="flex justify-between text-[#F5F2FA] text-sm font-baloo2 mb-1">
                <label
                  htmlFor="newPassword"
                  className="block text-[#F5F2FA] font-medium text-[12px]"
                >
                  New Password
                </label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-[#666666CC] text-[12px] flex items-center gap-1"
                >
                  <Image
                    src={`/svgs/${showPassword ? "hidden" : "show"}.svg`}
                    width={15}
                    height={13}
                    alt="eye"
                  />
                  <span>{showPassword ? "Hidden" : "Show"}</span>
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                className="w-full border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] placeholder:text-[#9E9E9E] placeholder:text-xs pl-2 font-light text-[12px]"
                placeholder="Enter new password"
                required
                value={newPassword}
                onChange={handleInputChange}
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <div className="flex justify-between text-[#F5F2FA] text-sm font-baloo2 mb-1">
                <label
                  htmlFor="confirmPassword"
                  className="block text-[#F5F2FA] font-medium text-[12px]"
                >
                  Confirm Password
                </label>
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="text-[#666666CC] text-[12px] flex items-center gap-1"
                >
                  <Image
                    src={`/svgs/${
                      confirmPasswordVisibility ? "hidden" : "show"
                    }.svg`}
                    width={15}
                    height={13}
                    alt="eye"
                  />
                  <span>{confirmPasswordVisibility ? "Hidden" : "Show"}</span>
                </button>
              </div>
              <input
                type={confirmPasswordVisibility ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] placeholder:text-[#9E9E9E] placeholder:text-xs pl-2 font-light text-[12px]"
                placeholder="Confirm new password"
                required
                value={confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#9747FF] hover:bg-[#7a34cc] text-white py-3 rounded-lg font-bold"
            >
              Reset Password
            </button>
          </form>
          <div className="flex justify-center border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] md:text-[10px] lg:text-[14px] w-full my-4">
            <Link
              href="/login"
              className="underline flex gap-2 items-center justify-center"
            >
              <span>
                <Image src="/svgs/back.svg" alt="back" width={25} height={25} />
              </span>
              Back to Login
            </Link>
          </div>
          <div className="text-[#E0E0E0] text-center pt-4 font-baloo2">
            <div className="flex justify-center gap-4 pb-2">
              <p className="md:text-[10px] lg:text-[14px]">Privacy policy</p>
              <span className="text-[10px] lg:text-[14px]">|</span>
              <p className="md:text-[10px] lg:text-[14px]">
                Terms and conditions
              </p>
            </div>
            <p className="md:text-[10px] lg:text-[12px]">
              Sripto Pvt. Ltd. product as Kanva. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
