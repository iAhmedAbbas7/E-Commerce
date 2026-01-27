// <== IMPORTS ==>
import "./globals.css";
import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
