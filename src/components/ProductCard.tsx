// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import Link from "next/link";
import Image from "next/image";
import { JSX, useState } from "react";
import { ProductType } from "@/types/types";
import { ShoppingCart } from "lucide-react";

// <== PRODUCT CARD COMPONENT ==>
const ProductCard = ({ product }: { product: ProductType }): JSX.Element => {
  // PRODUCT TYPES STATE
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  // HANDLE PRODUCT TYPE CHANGE FUNCTION
  const handleProductTypeChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    // SETTING PRODUCT TYPES STATE
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  // RETURNING PRODUCT CARD COMPONENT
  return (
    // MAIN CONTAINER
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* PRODUCT IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        {/* PRODUCT NAME */}
        <h1 className="font-medium">{product.name}</h1>
        {/* PRODUCT SHORT DESCRIPTION */}
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-sm">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            {/* SIZE HEADING */}
            <span className="text-gray-500">Size</span>
            {/* SIZE OPTIONS */}
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1 outline-0"
              onChange={(e) =>
                handleProductTypeChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            {/* COLOR HEADING */}
            <span className="text-gray-500">Color</span>
            {/* COLOR OPTIONS */}
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer border-1 ${productTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() =>
                    handleProductTypeChange({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRODUCT PRICE & ADD TO CART */}
        <div className="flex justify-between items-center">
          {/* PRICE */}
          <span className="font-medium">${product.price.toFixed(2)}</span>
          {/* ADD TO CART BUTTON */}
          <button className="ring ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// <== EXPORT PRODUCT CARD COMPONENT ==>
export default ProductCard;
