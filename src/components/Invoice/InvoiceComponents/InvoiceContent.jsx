"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const fakeInvoices = Array.from({ length: 10 }, (_, i) => ({
  invoiceId: `INV-${12345 + i}`,
  createdOn: `2025-02-${(i % 9) + 1} 14:35`,
  status: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Overdue",
  hoursPurchased: (i + 1) * 2,
  amount: `$${(i + 1) * 10}`,
}));

const getStatusColor = (status) => {
  if (status === "Paid") return "text-[#30D158]";
  if (status === "Pending") return "text-[#0A84FF]";
  return "text-[#FF453A]";
};

const InvoiceContent = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const inv = fakeInvoices.find((i) => i.invoiceId === id);
    setInvoice(inv);
  }, [id]);

  if (!invoice) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="w-full flex flex-col gap-2 font-jost text-sm text-[#FFFFFF]">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-[1.7rem] font-bold">Invoice</h1>
        <div className="flex gap-6 items-center">
          <button className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.1)] py-3 px-4 rounded-lg shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D] backdrop-blur-[20px] flex gap-2 items-center justify-center font-semibold hover:bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)]">
            Export as PDF
            <Image src={"/svgs/pdf.svg"} height={17} width={17} alt="Export" />
          </button>
          <button className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.1)] py-3 px-8 rounded-lg shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D] backdrop-blur-[20px] flex gap-2 items-center justify-center font-semibold hover:bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)]">
            Print
            <Image src={"/svgs/print.svg"} height={17} width={17} alt="Print" />
          </button>
        </div>
      </div>
      <div className="flex w-full bg-[#05061480] h-auto flex-col p-6 gap-4 rounded-lg">
        <div className="flex justify-between w-full items-center pb-3 border-b border-[#9E9E9E4D] flex-wrap">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-[#C8C8C8] to-[#999999] bg-clip-text text-transparent">
            KANVA
          </h1>
          <p className="text-sm font-baloo2">
            Tax Invoice/Bill of Supply/Cash Memo
          </p>
        </div>
        <div className="flex justify-between items-center w-full font-baloo2 pb-3 border-b border-[#9E9E9E4D] flex-wrap">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">From</p>
            <p>Sripto,pvt</p>
            <p>Street Address: </p>
            <p>Phone: 9865679878</p>
          </div>
          <div className="flex flex-col gap-1 text-end">
            <p className="font-semibold">To</p>
            <p>Sripto,pvt</p>
            <p>Street Address: </p>
            <p>Phone: 9865679878</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center font-baloo2 pb-3 border-b border-[#9E9E9E4D] flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Description</p>
            <p className="text-[#D3D3D3]">Extending the On-Screen Duration</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Hours</p>
              <p className="text-[#D3D3D3]">100</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Prize</p>
              <p className="text-[#D3D3D3]">$5</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Total</p>
              <p className="text-[#D3D3D3]">$500</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center font-baloo2 pb-3 border-b border-[#9E9E9E4D]">
          <h2 className="font-bold">Total</h2>
          <p className="font-bold">$500</p>
        </div>
        <div className="mt-10 flex justify-between items-center flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Payment Transaction ID:</p>
            <p className="text-[#D3D3D3]"># 403-6731832-4994</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Date & Time:</p>
            <p className="text-[#D3D3D3]">24/5/2025, 14:35 hrs</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Invoice Value:</p>
            <p className="text-[#D3D3D3]">$500</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Mode of Payment:</p>
            <p className="text-[#D3D3D3]">UPI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceContent;
