"use client";
import dynamic from "next/dynamic";

const OtpPage = dynamic(() => import("@/components/Otp/otp"), { ssr: false });

export default OtpPage;
