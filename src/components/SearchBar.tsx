// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { JSX } from "react";
import { Search } from "lucide-react";

// <== SEARCH BAR COMPONENT ==>
const SearchBar = (): JSX.Element => {
  // RETURN SEARCH BAR COMPONENT
  return (
    // MAIN CONTAINER
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md">
      {/* SEARCH ICON */}
      <Search className="w-4 h-4 text-gray-500" />
      {/* INPUT FIELD */}
      <input
        id="search"
        name="search"
        placeholder="Search..."
        className="text-sm outline-0"
      />
    </div>
  );
};

// <== EXPORT SEARCH BAR COMPONENT ==>
export default SearchBar;
