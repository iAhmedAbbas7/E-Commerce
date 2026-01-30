// <== CLIENT COMPONENT ==>
"use client";

import { ShoppingCart } from "lucide-react";

// <== CART PAGE STEPS ==>
const STEPS = [
  // STEP 1
  {
    id: 1,
    title: "Shopping Cart",
  },
  // STEP 2
  {
    id: 2,
    title: "Shipping Address",
  },
  // STEP 3
  {
    id: 3,
    title: "Payment Method",
  },
];

// <== CART PAGE COMPONENT ==>
const CartPage = () => {
  // RETURNING CART PAGE COMPONENT
  return (
    // MAIN CONTAINER
    <div className="flex flex-col items-center justify-center gap-8 mt-12">
      {/* TITLE */}
      <h1 className="flex items-center gap-2 text-2xl font-semibold text-gray-600">
        <span>Your Shopping Cart</span>
        <span>
          <ShoppingCart className="text-gray-600 w-6 h-6" />
        </span>
      </h1>
      {/* STEPS */}
      <div>
        {STEPS.map((step) => (
          <div key={step.id}>{step.title}</div>
        ))}
      </div>
    </div>
  );
};

// <== EXPORT CART PAGE COMPONENT ==>
export default CartPage;
