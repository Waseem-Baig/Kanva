"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarOpen, isMobile, setSidebarOpen }) => {
  const pathname = usePathname();

  const renderMenu = () => (
    <div className="flex flex-col w-full px-2 gap-4 text-[#E0E0E0]">
      {menuItems.map((item) => {
        const isActive = pathname.startsWith(item.href); // Check if the path starts with the item's href

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`w-full py-4 rounded-lg flex ${
              !sidebarOpen && "justify-center"
            } items-center gap-3 px-4 transition-all duration-500 tracking-wide relative
              ${
                isActive
                  ? "bg-[linear-gradient(299.53deg,rgba(0,0,0,0.5)_29.05%,rgba(84,32,164,0.5)_100.44%)] shadow-[inset_-1px_-2px_6px_0px_#9747FFBF] text-lg"
                  : "hover:translate-x-2 opacity-75 hover:opacity-100 hover:before:opacity-100 hover:border-l text-sm hover:text-lg hover:tracking-wider hover:bg-[radial-gradient(52.2%_91.51%_at_0%_49.21%,rgba(159,121,217,0.3)_0%,rgba(84,32,164,0.3)_33.5%,rgba(0,0,0,0)_100%)]"
              }`}
          >
            <Image src={item.icon} width={25} height={25} alt={item.label} />
            {sidebarOpen && (
              <p className="font-jost font-semibold transition-all duration-0 tracking-wide">
                {item.label}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-4 h-full bg-[rgba(5,6,20,0.5)] rounded-lg px-3 py-6 z-0 overflow-hidden
        transition-[width] duration-500 ease-in-out
        ${
          sidebarOpen
            ? isMobile
              ? "w-[50%]"
              : "lg:w-[27%] md:w-[30%]"
            : "w-[120px]" // Adjusted for smooth closing
        }`}
    >
      <div className="flex w-full justify-between items-center">
        <Image
          src="/images/sriptoLogo.png"
          width={100}
          height={100}
          alt="Logo"
          className={`mb-4 transition-all duration-500 opacity-100`}
        />
        {isMobile && sidebarOpen && (
          <button onClick={setSidebarOpen}>
            <Image src="/svgs/close.svg" width={25} height={25} alt="close" />
          </button>
        )}
      </div>
      {renderMenu()}
    </div>
  );
};

// Sidebar Menu Items
const menuItems = [
  { icon: "/svgs/home.svg", label: "Dashboard", href: "/dashboard" },
  { icon: "/svgs/iamuser.svg", label: "I AM USER", href: "/iamuser" },
  { icon: "/svgs/mode.svg", label: "Modal", href: "/modal" },
  { icon: "/svgs/history.svg", label: "History", href: "/history" },
  {
    icon: "/svgs/subscription.svg",
    label: "Subscription",
    href: "/subscription",
  },
];

export default Sidebar;
