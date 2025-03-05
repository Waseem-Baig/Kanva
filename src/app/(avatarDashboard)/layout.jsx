"use client";

import AvatarNavbar from "@/components/Avatar/AvatarComponents/AvatarNavbar";
import Sidebar from "@/components/Avatar/AvatarComponents/AvatarSidebar";
import Footer from "@/components/Dashboard/DashboardComponents/Footer";
import React, { useEffect, useState } from "react";
import { useAvatar } from "@/context/AvatarContext"; // Import AvatarContext

const AvatarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { name } = useAvatar(); // Get name from context

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSidebarOpen(window.innerWidth > 900);
      setIsMobile(window.innerWidth <= 900);

      const handleResize = () => {
        setSidebarOpen(window.innerWidth > 900);
        setIsMobile(window.innerWidth <= 900);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center p-4 flex gap-4 relative"
      style={{ backgroundImage: "url('/images/Background.png')" }}
    >
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        setSidebarOpen={toggleSidebar}
        label={name} // Use name from context
      />

      {/* Main Content */}
      <div
        className={`flex flex-col w-full h-full z-20 transition-all duration-300 overflow-y-scroll scrollbar-hide ${
          isMobile && sidebarOpen ? "blur-effect pointer-events-none" : ""
        }`}
      >
        <AvatarNavbar setSidebarOpen={toggleSidebar} isMobile={isMobile} />

        {/* Dynamic Page Content */}
        <div className="flex flex-col gap-4 pb-4 w-full">{children}</div>
        <div className="w-full mt-auto bottom-0 sticky">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AvatarLayout;
