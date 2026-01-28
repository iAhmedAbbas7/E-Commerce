// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

// <== FOOTER COMPONENT ==>
const Footer = (): JSX.Element => {
  // GET CURRENT YEAR
  const currentYear = new Date().getFullYear();
  // RETURNING FOOTER COMPONENT
  return (
    // FOOTER MAIN CONTAINER
    <footer className="mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between md:gap-0 p-8 rounded-lg bg-gray-800">
      {/* FIRST SECTION */}
      <div className="flex flex-col items-center gap-4 md:items-start">
        {/* LINK */}
        <Link href={"/"} className="flex items-center gap-2">
          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="E-Commerce Platform"
            width={36}
            height={36}
          />
          {/* NAME */}
          <p className="hidden md:flex text-md font-medium tracking-wider text-white">
            E-Commerce
          </p>
        </Link>
        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500">© {currentYear} E-Commerce</p>
        {/* RIGHTS RESERVED */}
        <p className="text-sm text-gray-500">All Rights Reserved</p>
      </div>
      {/* SECOND SECTION */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 font-semibold">Links</p>
        <Link className="hover:text-gray-500" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Contact
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Terms of Service
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Privacy Policy
        </Link>
      </div>
      {/* THIRD SECTION */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 font-semibold">Products</p>
        <Link className="hover:text-gray-500" href={"/"}>
          All Arrivals
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          New Arrivals
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Best Sellers
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Sale Items
        </Link>
      </div>
      {/* FOURTH SECTION */}
      <div className="flex flex-col items-center gap-4 md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50 font-semibold">Company</p>
        <Link className="hover:text-gray-500" href={"/"}>
          About
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Contact
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Blog
        </Link>
        <Link className="hover:text-gray-500" href={"/"}>
          Affiliate Program
        </Link>
      </div>
    </footer>
  );
};

// <== EXPORT FOOTER COMPONENT ==>
export default Footer;
