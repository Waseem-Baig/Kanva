"use client"; // Ensure this runs only on the client side

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AvatarNavbar = ({ setSidebarOpen, classes }) => {
  const pathname = usePathname();

  // Find the index of "avatarHomePage" in the path
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const avatarIndex = pathSegments.indexOf("avatarHomePage");

  // Get only the segments after "avatarHomePage"
  const breadcrumbs =
    avatarIndex !== -1
      ? pathSegments.slice(avatarIndex + 1).map((segment, index, array) => {
          const href = "/avatarHomePage/" + array.slice(0, index + 1).join("/");
          return {
            name: segment.replace(/-/g, " "),
            href,
            isCurrent: index === array.length - 1,
          };
        })
      : [];

  return (
    <div className="flex justify-between px-4 py-2 bg-[#05061480] w-full h-auto font-baloo2 text-[#FFFFFF] text-sm rounded-lg items-center gap-6 mb-4 z-10 relative">
      <div className="flex gap-4 items-center">
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

        <Link className="text-[#9E9E9E] text-sm" href="/dashboard">
          Home
        </Link>

        <Image
          src={"/svgs/arrowFilled.svg"}
          width={25}
          height={25}
          alt="Next"
        />

        {/* Avatars Home Link (Always Present) */}
        <button className="text-[#9E9E9E] text-sm">Avatars Home</button>

        {breadcrumbs.length > 0 &&
          breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <Image
                src={"/svgs/arrowFilled.svg"}
                width={25}
                height={25}
                alt="Next"
              />
              <button
                className={`text-sm capitalize ${
                  breadcrumb.isCurrent
                    ? "text-[#D3D3D3] font-bold"
                    : "text-[#9E9E9E]"
                }`}
              >
                {breadcrumb.name}
              </button>
            </React.Fragment>
          ))}
      </div>

      <button className="flex gap-2 items-center border border-[#5824A6] py-3 px-4 rounded-lg">
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
