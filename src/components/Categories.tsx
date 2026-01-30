// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { JSX } from "react/jsx-dev-runtime";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// <== PRODUCT CATEGORIES DATA ==>
export const CATEGORIES: { name: string; icon: JSX.Element; slug: string }[] = [
  // EACH CATEGORY
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  // T-SHIRTS CATEGORY
  {
    name: "T-Shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  // SHOES CATEGORY
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  // ACCESSORIES CATEGORY
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  // BAGS CATEGORY
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  // DRESSES CATEGORY
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  // JACKETS CATEGORY
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  // GLOVES CATEGORY
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

// <== CATEGORIES COMPONENT ==>
const Categories = (): JSX.Element => {
  // USING ROUTER HOOK
  const router = useRouter();
  // GETTING PATHNAME FROM THE ROUTER
  const pathname = usePathname();
  // USING SEARCH PARAMS HOOK TO GET QUERY PARAMETERS
  const searchParams = useSearchParams();
  // GETTING CURRENT SELECTED CATEGORY FROM THE SEARCH PARAMS
  const selectedCategory = searchParams.get("category");
  // HANDLE CATEGORY CHANGE FUNCTION
  const handleChange = (slug: string | null): void => {
    // CREATING NEW URL SEARCH PARAMS
    const params = new URLSearchParams(searchParams.toString());
    // UPDATING THE CATEGORY PARAMETER
    params.set("category", slug || "all");
    // PUSHING THE NEW URL TO THE ROUTER
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  // RETURNING CATEGORIES COMPONENT
  return (
    // MAIN CONTAINER
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {/* CATEGORIES RENDERING */}
      {CATEGORIES.map((category) => (
        <div
          key={category.name}
          className={`flex items-center justify-center gap-2 px-2 py-1 cursor-pointer rounded-md ${category.slug === selectedCategory ? "bg-white" : "text-gray-500"}`}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

// <== EXPORT CATEGORIES COMPONENT ==>
export default Categories;
