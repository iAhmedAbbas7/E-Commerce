// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { JSX } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// <== SHOPPING CART ICON COMPONENT ==>
const ShoppingCartIcon = (): JSX.Element => {
  // RETURN SHOPPING CART ICON COMPONENT
  return (
    // MAIN CONTAINER
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="w-5 h-5 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs">
        0
      </span>
    </Link>
  );
};

// <== EXPORT SHOPPING CART ICON COMPONENT ==>
export default ShoppingCartIcon;
