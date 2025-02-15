import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#05061480] w-auto text-[#E0E0E0] font-baloo2 flex justify-center items-center gap-3 p-2 rounded-lg">
      <Link className="text-sm hover:underline" href={"/terms&conditions"}>
        Privacy policy
      </Link>
      <p className="text-xl">|</p>
      <Link className="text-sm hover:underline" href={"/terms&conditions"}>
        Terms and conditions
      </Link>
    </div>
  );
};

export default Footer;
