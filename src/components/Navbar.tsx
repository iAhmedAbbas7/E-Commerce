// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

// <== NAVBAR COMPONENT ==>
const Navbar = (): JSX.Element => {
  // RETURN NAVBAR COMPONENT
  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
      {/* LEFT SECTION */}
      <Link href={"/"} className="flex items-center gap-2">
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="E-Commerce Platform"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        {/* NAME */}
        <p className="hidden md:flex text-md font-medium tracking-wider text-gray-600">
          E-Commerce
        </p>
      </Link>
      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* SEARCH BAR */}
        <SearchBar />
        {/* HOME */}
        <Link href={"/"}>
          <Home className="w-5 h-5 text-gray-600" />
        </Link>
        {/* NOTIFICATIONS */}
        <Link href={"/notifications"}>
          <Bell className="w-5 h-5 text-gray-600" />
        </Link>
        {/* CART */}
        <ShoppingCartIcon />
        {/* SIGN IN */}
        <Link
          className="rounded-md px-2 py-1 border border-gray-600 text-sm font-medium text-gray-600 hover:border-black hover:text-gray-800"
          href={"/login"}
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

// <== EXPORT NAVBAR COMPONENT ==>
export default Navbar;
