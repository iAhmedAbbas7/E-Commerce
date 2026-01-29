// <== IMPORTS ==>
import { JSX } from "react";
import Link from "next/link";
import Filter from "./Filter";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { ShoppingBag } from "lucide-react";
import { PRODUCTS } from "@/utils/constants";

// <== PRODUCT LIST COMPONENT ==>
const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}): JSX.Element => {
  // RETURNING PRODUCT LIST COMPONENT
  return (
    // MAIN CONTAINER
    <div className="w-full">
      {/* CATEGORIES COMPONENT */}
      <Categories />
      {/* CONDITIONAL PRODUCTS FILTER */}
      {params === "products" && <Filter />}
      {/* PRODUCT CARDS CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12">
        {/* PRODUCT CARDS RENDERING */}
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* VIEW ALL PRODUCTS */}
      <div className="flex justify-end mt-4">
        <Link
          className="rounded-md shadow-md px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-sm font-semibold text-gray-600 flex items-center gap-2"
          href={category ? `/products?category=${category}` : "/products"}
        >
          <ShoppingBag className="w-4 h-4" />
          View All Products
        </Link>
      </div>
    </div>
  );
};

// <== EXPORT PRODUCT LIST COMPONENT ==>
export default ProductList;
