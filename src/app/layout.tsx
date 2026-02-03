// <== IMPORTS ==>
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";

// <== SANS FONT CONFIGURATION ==>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// <== MONO FONT CONFIGURATION ==>
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// <== METADATA DEFINITION ==>
export const metadata: Metadata = {
  // <== SITE TITLE ==>
  title: "E-Commerce",
  // <== SITE DESCRIPTION ==>
  description: "E-Commerce Platform for a Seamless Shopping Experience",
};

// <== ROOT LAYOUT COMPONENT ==>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          {/* NAVBAR */}
          <Navbar />
          {/* MAIN CONTENT */}
          {children}
          {/* FOOTER */}
          <Footer />
        </div>
        {/* TOAST CONTAINER */}
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
