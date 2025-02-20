"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const InvoiceNavbar = () => {
  const { id } = useParams();

  return (
    <div className="flex gap-6 justify-start p-4 bg-[#05061480] text-sm font-baloo2 rounded-lg w-full">
      <Link href="/subscription" className="text-[#9E9E9E] pl-4">
        Subscription
      </Link>
      <Image src="/svgs/arrowFilled.svg" width={20} height={20} alt="Invoice" />
      <Link
        href={`/subscription/invoice/${id.replace("#", "")}`}
        className="text-[#D3D3D3]"
      >
        Invoice
      </Link>
    </div>
  );
};

export default InvoiceNavbar;
