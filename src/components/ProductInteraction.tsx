// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/dist/client/components/navigation";
import { JSX, useState } from "react";
import { toast } from "react-toastify";
import { ProductType } from "@/types/types";
import useCartStore from "@/store/CartStore";
import { Minus, Plus, ShoppingCart } from "lucide-react";

// <== PRODUCT INTERACTION COMPONENT ==>
const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}): JSX.Element => {
  // USING USE ROUTER HOOK
  const router = useRouter();
  // USING PATHNAME HOOK
  const pathname = usePathname();
  // USING USE SEARCH PARAMS HOOK
  const searchParams = useSearchParams();
  // GETTING ADD TO CART FROM CART STORE
  const { addItem } = useCartStore();
  // PRODUCT QUANTITY STATE
  const [quantity, setQuantity] = useState<number>(1);
  // HANDLER FOR TYPE CHANGE
  const handleTypeChange = (type: string, value: string) => {
    // CREATING NEW SEARCH PARAMS OBJECT
    const newSearchParams = new URLSearchParams(searchParams.toString());
    // SETTING NEW TYPE VALUE
    newSearchParams.set(type, value);
    // PUSHING NEW ROUTE WITH UPDATED SEARCH PARAMS
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  };
  // HANDLER FOR QUANTITY CHANGE
  const handleQuantityChange = (action: "increment" | "decrement") => {
    // UPDATING QUANTITY BASED ON ACTION
    setQuantity((prevQuantity) => {
      // IF ACTION IS INCREMENT
      if (action === "increment") {
        // INCREMENTING QUANTITY
        return prevQuantity + 1;
      }
      // IF ACTION IS DECREMENT
      else {
        // DECREMENTING QUANTITY BUT NOT BELOW 1
        return prevQuantity > 1 ? prevQuantity - 1 : 1;
      }
    });
  };
  // HANDLER FOR ADD TO CART
  const handleAddToCart = () => {
    // ADDING ITEM TO CART STORE
    addItem({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
    // SHOWING TOAST NOTIFICATION
    toast.success("Item added to cart!");
  };

  // RETURNING PRODUCT INTERACTION COMPONENT
  return (
    // MAIN CONTAINER
    <div className="flex flex-col gap-4">
      {/* PRODUCT SIZE */}
      <div className="flex flex-col gap-2 text-gray-600">
        {/* TITLE */}
        <span className="font-medium text-sm">Size:</span>
        {/* PRODUCT SIZES */}
        <div className="flex gap-2">
          {/* RENDERING PRODUCT SIZES */}
          {product.sizes.map((size) => (
            <div
              onClick={() => handleTypeChange("size", size)}
              key={size}
              className={`cursor-pointer p-[2px] border-2 ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"} uppercase text-xs text-center flex items-center justify-center`}
              >
                {size}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PRODUCT COLOR */}
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        {/* TITLE */}
        <span className="font-medium text-sm">Color:</span>
        {/* PRODUCT COLORS */}
        <div className="flex gap-2">
          {/* RENDERING PRODUCT COLORS */}
          {product.colors.map((color) => (
            <div
              onClick={() => handleTypeChange("color", color)}
              key={color}
              className={`cursor-pointer p-[2px] border-2 ${
                selectedColor === color ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/* PRODUCT QUANTITY */}
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        {/* TITLE */}
        <span className="font-medium text-sm">Quantity:</span>
        {/* QUANTITY SELECTOR */}
        <div className="flex items-center gap-2">
          {/* INCREASE BUTTON */}
          <button
            onClick={() => handleQuantityChange("increment")}
            className="bg-gray-200 text-gray-800 px-3 py-2 flex items-center justify-center cursor-pointer rounded-md"
          >
            <Plus className="w-4 h-4" />
          </button>
          {/* QUANTITY DISPLAY */}
          <span className="text-gray-800 px-4 py-2 font-semibold text-sm">
            {quantity}
          </span>
          {/* DECREASE BUTTON */}
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="bg-gray-200 text-gray-800 px-3 py-2 flex items-center justify-center cursor-pointer rounded-md"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        className="bg-black hover:bg-black/90 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full cursor-pointer font-semibold"
      >
        <Plus className="w-4 h-4" /> <span>Add to Cart</span>
      </button>
      {/* BUY THIS PRODUCT BUTTON */}
      <button className="bg-white text-black hover:bg-black/90 hover:text-white border-2 hover:border-black px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full cursor-pointer font-semibold">
        <ShoppingCart className="w-4 h-4" /> <span>Buy This Product</span>
      </button>
    </div>
  );
};

// <== EXPORTING PRODUCT INTERACTION COMPONENT ==>
export default ProductInteraction;
