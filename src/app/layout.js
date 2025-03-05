"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Dynamically import AvatarProvider with SSR disabled
const AvatarProvider = dynamic(
  () => import("@/context/AvatarContext").then((mod) => mod.AvatarProvider),
  { ssr: false }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap children with AvatarProvider */}
        <AvatarProvider>{children}</AvatarProvider>
      </body>
    </html>
  );
}
