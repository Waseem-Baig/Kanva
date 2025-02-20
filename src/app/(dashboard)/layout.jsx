"use client";
import Footer from "@/components/Dashboard/DashboardComponents/Footer";
import Navbar from "@/components/Dashboard/DashboardComponents/Navbar";
import Sidebar from "@/components/Dashboard/DashboardComponents/Sidebar";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      />

      {/* Main Content */}
      <div
        className={`flex flex-col w-full h-full z-20 transition-all duration-300 overflow-y-scroll scrollbar-hide ${
          isMobile && sidebarOpen ? "blur-md pointer-events-none" : ""
        }`}
      >
        <Navbar setSidebarOpen={toggleSidebar} />

        {/* Dynamic Page Content */}
        <div className="flex flex-col gap-4">
          {children}
          <div className="w-full mt-auto bottom-0 sticky">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
