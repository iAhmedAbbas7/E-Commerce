// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { JSX } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// <== FILTER COMPONENT ==>
const Filter = (): JSX.Element => {
  // USING ROUTER HOOK
  const router = useRouter();
  // GETTING PATHNAME FROM THE ROUTER
  const pathname = usePathname();
  // USING SEARCH PARAMS HOOK TO GET QUERY PARAMETERS
  const searchParams = useSearchParams();
  // HANDLE FILTER CHANGE FUNCTION
  const handleFilterChange = (value: string): void => {
    // CREATING NEW URL SEARCH PARAMS
    const params = new URLSearchParams(searchParams.toString());
    // UPDATING THE CATEGORY PARAMETER
    params.set("sort", value);
    // PUSHING THE NEW URL TO THE ROUTER
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  // RETURNING FILTER COMPONENT
  return (
    // MAIN CONTAINER
    <div className="flex items-center justify-end gap-2 text-sm text-gray-600 my-4">
      <span className="font-semibold">Sort By :</span>
      {/* SELECT FILTER */}
      <select
        name="sort"
        id="sort"
        className="ring ring-gray-200 shadow-md p-1 rounded-md outline-0"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low - High</option>
        <option value="desc">Price: High - Low</option>
      </select>
    </div>
  );
};

// <== EXPORT FILTER COMPONENT ==>
export default Filter;
