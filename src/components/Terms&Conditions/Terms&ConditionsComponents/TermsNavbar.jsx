import Image from "next/image";
import Link from "next/link";
import React from "react";

const TermsNavbar = () => {
  return (
    <div className="flex gap-6 justify-start p-4 bg-[#05061480] text-sm font-baloo2 rounded-lg w-full">
      <Link href="/dashboard" className="text-[#9E9E9E] pl-4">
        Home
      </Link>
      <Image
        src="/svgs/arrowFilled.svg"
        width={20}
        height={20}
        alt="Notifications"
      />
      <Link href="/terms&conditions" className="text-[#D3D3D3]">
        Terms and Conditions
      </Link>
    </div>
  );
};

export default TermsNavbar;
