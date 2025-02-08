"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "../General/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";

const USER_TYPES = { PERSONAL: "individual", ORGANIZATION: "organization" };

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    country: "",
    address: "",
    pincode: "",
    userType: null,
    organizationName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/otp?redirectTo=/login");
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
      <div className="relative z-10 flex items-center justify-end w-full h-full pr-12">
        <div className="bg-[linear-gradient(299.53deg,rgba(0,0,0,0.8)_29.05%,rgba(55,32,84,0.8)_84.15%,rgba(84,32,164,0.8)_100.44%)] w-[30%] px-8 py-4 rounded-lg shadow-md backdrop-blur-sm">
          <h1 className="font-jost font-bold text-4xl bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text text-center pb-1 text-[2.5rem]">
            KANVA
          </h1>
          <h2 className="text-[#F5F2FA] font-bold text-center text-[1.5rem]">
            Sign Up
          </h2>
          <form onSubmit={handleSignup} className="flex flex-col gap-1 w-full">
            <label className="text-[#F5F2FA] font-medium text-[14px]">
              Usage
            </label>
            <div className="flex justify-between flex-wrap px-2">
              {Object.entries(USER_TYPES).map(([key, value]) => (
                <div
                  key={value}
                  className="flex items-center cursor-pointer"
                  onClick={() => setSelectedOption(value)}
                >
                  <div className="w-4 h-4 rounded-full border-2 border-[#9747FFBF] flex items-center justify-center">
                    {selectedOption === value && (
                      <div className="w-2 h-2 bg-[#F5F2FA] rounded-full" />
                    )}
                  </div>

                  <label className="ml-2 text-[#F5F2FA] font-medium text-[14px]">
                    {key.charAt(0) + key.slice(1).toLowerCase()}
                  </label>
                </div>
              ))}
            </div>
            {selectedOption === USER_TYPES.ORGANIZATION && (
              <InputField
                id="organizationName"
                name="organizationName"
                placeholder="Enter organization name"
                label="Organization Name"
                value={formData.organizationName}
                onChange={handleInputChange}
              />
            )}
            {["username", "email", "mobile", "country"].map((field) => (
              <InputField
                key={field}
                id={field}
                name={field}
                placeholder={`Enter ${field}`}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleInputChange}
              />
            ))}
            <div className="mb-2">
              <div className="flex justify-between text-[#F5F2FA] text-sm mb-1">
                <label
                  htmlFor="password"
                  className="block text-[#F5F2FA] font-medium text-[12px] font-baloo2"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#666666CC] flex items-center gap-1"
                >
                  <Image
                    src={`/svgs/${showPassword ? "hidden" : "show"}.svg`}
                    width={15}
                    height={13}
                    alt="eye"
                  />
                  <span className="md:text-[10px] lg:text-[12px]">
                    {showPassword ? "Hidden" : "Show"}
                  </span>
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full border border-[#9747FFBF] bg-black/20 py-2 rounded-lg text-[#F5F2FA] placeholder:text-[#9E9E9E] placeholder:text-xs pl-2 font-light md:text-[10px] lg:text-[12px]"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5420A4] py-2 border border-[#5420A4] rounded-lg text-white text-[12px] mb-1"
            >
              Sign Up
            </button>
            <div className="flex justify-center border border-[#9747FFBF] bg-black/20 py-2 rounded-lg text-[#F5F2FA] w-full md:text-[10px] lg:text-[12px] text-[10px]">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
