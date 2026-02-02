// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import Image from "next/image";
import { useState } from "react";
import { ShippingFormType } from "@/types/types";
import PaymentForm from "@/components/PaymentForm";
import { CART_PAGE_STEPS } from "@/utils/constants";
import ShippingForm from "@/components/ShippingForm";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CreditCard,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";

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
  // USING USE ROUTER HOOK
  const router = useRouter();
  // USING USE SEARCH PARAMS HOOK
  const searchParams = useSearchParams();
  // SHIPPING FORM STATE
  const [shippingForm, setShippingForm] = useState<ShippingFormType | null>(
    null,
  );
  // SETTING ACTIVE STEP
  const activeStep = parseInt(searchParams.get("step") || "1");
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
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {STEPS.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 ${activeStep === step.id ? "border-gray-600" : "border-gray-200"} pb-3`}
          >
            <div
              className={`w-6 h-6 rounded-full p-4 text-white flex items-center justify-center ${step.id === activeStep ? "bg-gray-600" : "bg-gray-200"}`}
            >
              {step.id}
            </div>
            <div
              className={`text-sm ${step.id === activeStep ? "text-gray-600 font-semibold" : "text-gray-400"}`}
            >
              {step.title}
            </div>
            <div>
              {step.id === 1 && (
                <ShoppingCart className="w-5 h-5 text-gray-500" />
              )}
              {step.id === 2 && <Truck className="w-5 h-5 text-gray-500" />}
              {step.id === 3 && (
                <CreditCard className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* STEPS AND CART DETAILS SECTION */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border-2 border-gray-200 p-8 rounded-lg flex flex-col gap-8">
          {/* STEP TITLE */}
          <h2 className="font-semibold text-lg">
            {STEPS.find((step) => step.id === activeStep)?.title}
          </h2>
          {/* CONDITIONALLY RENDERING STEPS */}
          {activeStep === 1 ? (
            CART_PAGE_STEPS.map((item) => (
              // SINGLE CART ITEM
              <div key={item.id} className="flex items-center justify-between">
                {/* IMAGE & DETAILS */}
                <div className="flex gap-8">
                  {/* PRODUCT IMAGE */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain "
                    />
                  </div>
                  {/* PRODUCT DETAILS */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[1rem] font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                {/* DELETE BUTTON */}
                <button
                  title="Remove Item"
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center p-2 cursor-pointer"
                >
                  <Trash2 />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <div>
              <p>Please fill the shipping form first.</p>
            </div>
          )}
        </div>
        {/* CART DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-2 border-gray-200 p-8 rounded-lg flex flex-col gap-8 h-max">
          {/* TITLE */}
          <h2 className="font-semibold">Cart Details</h2>
          {/* INFO SECTION */}
          <div className="flex flex-col gap-4">
            {/* SUBTOTAL */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">Subtotal</p>
              <p className="text-sm font-semibold text-gray-600">
                $
                {CART_PAGE_STEPS.reduce(
                  (acc, item) => acc + item.price,
                  0,
                ).toFixed(2)}
              </p>
            </div>
            {/* DISCOUNT */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                Discount (10%)
              </p>
              <p className="text-sm font-semibold text-gray-600">$10.00</p>
            </div>
            {/* SHIPPING FEE */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                Shipping Fee
              </p>
              <p className="text-sm font-semibold text-gray-600">$5.00</p>
            </div>
            {/* HORIZONTAL LINE */}
            <hr className="border-2 border-gray-200" />
            {/* TOTAL */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-600">Total</p>
              <p className="text-lg font-semibold text-gray-600">$15.00</p>
            </div>
          </div>
          {/* BUTTON */}
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full text-white bg-gray-600 hover:bg-gray-700 font-semibold cursor-pointer p-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all duration-300"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// <== EXPORT CART PAGE COMPONENT ==>
export default CartPage;
