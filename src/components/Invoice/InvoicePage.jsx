import React from "react";
import InvoiceNavbar from "./InvoiceComponents/InvoiceNavbar";
import InvoiceContent from "./InvoiceComponents/InvoiceContent";

const InvoicePage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <InvoiceNavbar />
      <InvoiceContent />
    </div>
  );
};

export default InvoicePage;
