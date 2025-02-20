import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(290.78deg,rgba(55,32,84,0.5)_0%,rgba(84,32,164,0.5)_100%)] w-full text-[#E0E0E0] h-auto font-baloo2 flex justify-center items-center gap-3 p-2 rounded-lg flex-grow">
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
