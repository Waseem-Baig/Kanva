"use client";

import AvatarNavbar from "@/components/Avatar/AvatarComponents/AvatarNavbar";
import Sidebar from "@/components/Avatar/AvatarComponents/AvatarSidebar";
import Footer from "@/components/Dashboard/DashboardComponents/Footer";
import Cookies from "js-cookie"; // Import js-cookie
import React, { useEffect, useState } from "react";

const AvatarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState(""); // State to store the avatar name

  // Fetch the avatar name from cookies on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set sidebar state based on window width
      setSidebarOpen(window.innerWidth > 900);
      setIsMobile(window.innerWidth <= 900);

      // Get the avatar name from cookies
      const avatarName = Cookies.get("avatarName");
      if (avatarName) {
        setName(avatarName);
      }

      // Handle window resize
      const handleResize = () => {
        setSidebarOpen(window.innerWidth > 900);
        setIsMobile(window.innerWidth <= 900);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Toggle sidebar visibility
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
        label={name} // Pass the name from cookies
      />

      {/* Main Content */}
      <div
        className={`flex flex-col w-full h-full z-20 transition-all duration-300 overflow-y-scroll scrollbar-hide ${
          isMobile && sidebarOpen ? "blur-md pointer-events-none" : ""
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
