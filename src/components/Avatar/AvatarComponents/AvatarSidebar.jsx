"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarOpen, isMobile, setSidebarOpen, label }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: "/svgs/home.svg",
      label: label,
      href: `/avatarHomePage/${label}`,
    },
    { icon: "/svgs/iamuser.svg", label: "APIs", href: "/apis" },
    { icon: "/svgs/mode.svg", label: "Avatar", href: "/avatar" },
    { icon: "/svgs/history.svg", label: "Customize", href: "/customize" },
    {
      icon: "/svgs/subscription.svg",
      label: "Screens",
      href: "/screens",
    },
  ];

  const renderMenu = () => (
    <div className="flex flex-col w-full px-2 gap-4 text-[#E0E0E0]">
      {menuItems.map((item, index) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={index}
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
            <Image src={item.icon} width={25} height={25} alt={index} />
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
            : "w-[120px]"
        }`}
    >
      <div className="flex w-full justify-between items-center">
        <h1
          className={`font-bold bg-[linear-gradient(92.6deg,#FFFFFF_1.18%,#C8C8C8_53.96%,#999999_99.4%)] bg-clip-text text-transparent mb-4 ${
            !sidebarOpen
              ? "text-2xl"
              : "text-4xl transition-[width] duration-700 ease-in-out"
          }`}
        >
          KANVA
        </h1>
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

export default Sidebar;
