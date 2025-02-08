"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "../General/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push("/otp?redirectTo=/dashboard");
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
              Log In
            </h2>

            <InputField
              width="w-full py-3"
              type="text"
              label="Email / Phone Number"
              placeholder="Enter Email/Phone Number"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <div>
              <div className="flex justify-between text-[#F5F2FA] text-sm font-baloo2 mb-1">
                <label
                  htmlFor="password"
                  className="block text-[#F5F2FA] font-medium text-[12px] font-baloo2"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-[#666666CC] md:text-[10px] lg:text-[14px] flex items-center gap-1"
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
                id="password"
                name="password"
                className="w-full border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] placeholder:text-[#9E9E9E] placeholder:text-xs pl-2 font-light md:text-[10px] lg:text-[12px]"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="flex justify-end pt-1">
                <Link
                  href="/forgetPassword"
                  className="md:text-[10px] lg:text-[14px] text-[#F5F2FA]"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              className="w-full bg-[#5420A4] py-3 border border-[#5420A4] rounded-lg text-white font-baloo2 md:text-[10px] lg:text-[14px]"
              onClick={handleSignIn}
            >
              Login
            </button>

            <div className="flex justify-center border border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] md:text-[10px] lg:text-[14px] w-full">
              <p>
                Don’t have an account?{" "}
                <Link href="/register" className="underline">
                  Sign up
                </Link>
              </p>
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

export default LoginPage;
