"use client"; // Ensure this runs only on the client side

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AvatarNavbar = ({ setSidebarOpen, classes }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Generate breadcrumbs dynamically
  const breadcrumbs = pathSegments.map((segment, index, array) => {
    const href = "/" + array.slice(0, index + 1).join("/");
    return {
      name: segment
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert spaces in camelCase
        .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize words
      href,
      isCurrent: index === array.length - 1,
    };
  });

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between px-4 py-2 bg-[#05061480] w-full h-auto font-baloo2 text-[#FFFFFF] text-sm rounded-lg items-center gap-6 mb-4 z-10 relative">
      <div className="flex gap-4 items-center">
        {/* Sidebar Toggle Button */}
        <button
          onClick={setSidebarOpen}
          className={`${classes} hover:border rounded-lg p-4 hover:backdrop-blur-[20px] hover:shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D]`}
        >
          <Image
            src="/svgs/sidebarButton.svg"
            width={25}
            height={25}
            alt="sidebar"
          />
        </button>

        {/* Home Link */}
        <Link className="text-[#9E9E9E] text-sm" href="/dashboard">
          Home
        </Link>

        {/* Breadcrumbs */}
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Image
              src={"/svgs/arrowFilled.svg"}
              width={25}
              height={25}
              alt="Next"
            />
            {breadcrumb.isCurrent ? (
              // Current page (non-clickable)
              <span
                className={`text-sm capitalize cursor-pointer ${
                  breadcrumb.isCurrent
                    ? "text-[#D3D3D3] font-bold"
                    : "text-[#9E9E9E]"
                }`}
              >
                {breadcrumb.name}
              </span>
            ) : (
              // Clickable breadcrumb
              <button
                className={`text-sm capitalize cursor-pointer ${
                  breadcrumb.isCurrent
                    ? "text-[#D3D3D3] font-bold"
                    : "text-[#9E9E9E]"
                }`}
              >
                {breadcrumb.name}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Back Home Button */}
      <button
        className="flex gap-2 items-center border border-[#5824A6] py-3 px-4 rounded-lg"
        onClick={handleBack}
      >
        <Image
          src={"/svgs/arrowFilledBack.svg"}
          width={20}
          height={20}
          alt="Back"
        />
        Back Home
      </button>
    </div>
  );
};

export default AvatarNavbar;
