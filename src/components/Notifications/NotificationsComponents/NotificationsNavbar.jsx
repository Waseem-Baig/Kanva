import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotificationsNavbar = () => {
  return (
    <div className="flex gap-6 justify-start p-4 bg-[#05061480] text-sm font-baloo2 rounded-lg w-full">
      <Link href="/iamuser" className="text-[#9E9E9E] pl-4">
        I am user
      </Link>
      <Image
        src="/svgs/arrowFilled.svg"
        width={20}
        height={20}
        alt="Notifications"
      />
      <Link href="/dashboard/iamuser/notifications" className="text-[#D3D3D3]">
        Notifications
      </Link>
    </div>
  );
};

export default NotificationsNavbar;
