"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useRef } from "react";
// import axios from "axios";

// const URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const OTPInput = ({ numInputs, onComplete }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(numInputs).fill(""));

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < numInputs - 1) {
        inputRefs.current[index + 1].focus();
      }

      if (newOtp.every((char) => char !== "")) {
        onComplete(newOtp.join(""));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex w-full justify-between">
      {Array.from({ length: numInputs }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          className="w-12 h-12 border-[1px] border-[#9747FFBF] bg-black/20 py-2 rounded-lg text-[#F5F2FA] backdrop:blur-[1px] placeholder:text-[#9E9E9E] placeholder:font-baloo-2 placeholder:text-[12px] font-light text-[14px] text-center"
          value={otp[index]}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

const OtpPage = () => {
  const router = useRouter();
  const temp_email = sessionStorage.getItem("email");
  const [email, setEmail] = useState(temp_email);
  const [mobile, setMobile] = useState("7842847858");
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const sendOtp = async () => {
    // try {
    //   await axios.post(`${URL}/send-otp`, { email, mobile });
    // } catch (err) {
    //   setError("Failed to send OTP. Please try again.");
    // }
  };

  const verifyOtp = async () => {
    // try {
    //   const payload = {
    //     email,
    //     email_otp: Number(emailOtp),
    //     mobile_otp: Number(mobileOtp),
    //   };
    //   const response = await axios.post(`${URL}/verify_otp`, payload);
    //   if (response.data.message === "Verification successful") {
    //     router.push(`${redirectTo}` || "/");
    //     sessionStorage.removeItem("email");
    //   } else {
    //     setError(response.data.message || "OTP verification failed.");
    //   }
    // } catch (err) {
    //   setError("OTP verification failed. Please try again.");
    // }
    router.push(`${redirectTo}` || "/");
  };

  return (
    <div className="relative w-screen h-screen font-jost">
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
        <div className="bg-[linear-gradient(299.53deg,rgba(0,0,0,0.8)_29.05%,rgba(55,32,84,0.8)_84.15%,rgba(84,32,164,0.8)_100.44%)] md:w-[35%] lg:w-[30%] p-8 rounded-lg shadow-md backdrop-blur-sm">
          <h1 className="font-jost font-bold text-4xl bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text text-center py-4 text-[3rem]">
            KANVA
          </h1>
          <h2 className="font-dm-sans text-[#F5F2FA] font-bold text-center text-[1.5rem]">
            Enter OTP
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="mt-4">
            <label className="text-[#F5F2FA] block mb-1 font-jost">
              Enter OTP Sent to Email {email}
            </label>
            <OTPInput numInputs={4} onComplete={setEmailOtp} />
            <button
              onClick={sendOtp}
              className="text-[#F5F2FA] block my-2 font-jost underline"
            >
              Resend OTP
            </button>
          </div>

          <button
            onClick={verifyOtp}
            className="w-full bg-[#5420A4] py-3 border border-[#5420A4] rounded-lg text-white text-[12px] mb-1 mt-2"
          >
            Verify OTP
          </button>

          <div className="text-[#E0E0E0] text-center pt-4 font-baloo2 mt-4">
            <div className="flex justify-center gap-4 pb-2">
              <p className="md:text-[10px] lg:text-[13px] text-[10px]">
                Privacy policy
              </p>
              <span className="md:text-[10px] lg:text-[13px] text-[10px]">
                |
              </span>
              <p className="md:text-[10px] lg:text-[13px] text-[10px]">
                Terms and conditions
              </p>
            </div>
            <p className="md:text-[10px] lg:text-[12px] text-[10px]">
              Sripto Pvt. Ltd. product as Kanva. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
