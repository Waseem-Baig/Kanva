"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "../General/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EmailEnter = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOTP = () => {
    // Simulating API call for OTP
    // if (formData.email) {
    //   setMessage("OTP has been sent to your email/phone number.");
    // } else {
    //   setMessage("Please enter a valid email or phone number.");
    // }
    router.push("/otp?redirectTo=/resetPassword");
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

          <div className="flex flex-col gap-4 pt-4 w-full">
            <h2 className="font-dm-sans text-[#F5F2FA] font-bold text-center text-[1.5rem]">
              Forgot Password
            </h2>

            <div>
              <InputField
                width="w-full py-3"
                type="text"
                label="Email / Phone Number"
                placeholder="Enter Email/Phone Number"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              {message && (
                <p className="text-center text-[#F5F2FA] text-sm">{message}</p>
              )}
            </div>

            <button
              className="w-full bg-[#5420A4] py-3 border border-[#5420A4] rounded-lg text-[#F5F2FA] font-baloo2 md:text-[10px] lg:text-[14px]"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>

            <div className="flex justify-center border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] md:text-[10px] lg:text-[14px] w-full">
              <Link
                href="/login"
                className="underline flex gap-2 items-center justify-center"
              >
                <span>
                  <Image
                    src="/svgs/back.svg"
                    alt="back"
                    width={25}
                    height={25}
                  />
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
    </div>
  );
};

export default EmailEnter;
