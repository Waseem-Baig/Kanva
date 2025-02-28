"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

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
    <div className="flex w-auto justify-between">
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
  const searchParams = useSearchParams();

  // State to store email
  const [email, setEmail] = useState("waseembaig9490@gmail.com");
  const [mobile, setMobile] = useState("7842847858");
  const [emailOtp, setEmailOtp] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState("/");

  useEffect(() => {
    const param = searchParams.get("redirectTo");
    if (param) {
      setRedirectTo(param);
    }
  }, [searchParams]); // Update state when searchParams change

  const verifyOtp = async () => {
    router.push(redirectTo);
  };

  const sendOtp = async () => {
    // Logic to send OTP
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
            <label className="text-[#F5F2FA] block mb-2 font-baloo2">
              Enter OTP Sent to Email {email}
            </label>
            <OTPInput numInputs={4} onComplete={setEmailOtp} />
            <button
              onClick={sendOtp}
              className="text-[#F5F2FA] block my-2 font-baloo2 underline"
            >
              Resend OTP
            </button>
          </div>

          <button
            onClick={verifyOtp}
            className="w-full bg-[#5420A4] py-3 border border-[#5420A4] rounded-lg text-white text-[14px] mb-1 mt-2 font-semibold font-baloo2"
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
