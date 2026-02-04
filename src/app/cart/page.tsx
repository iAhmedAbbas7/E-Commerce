// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  ArrowRight,
  CreditCard,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { JSX, useState } from "react";
import useCartStore from "@/store/CartStore";
import { ShippingFormType } from "@/types/types";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { useRouter, useSearchParams } from "next/navigation";

// <== CART PAGE STEPS ==>
const STEPS = [
  // STEP 1
  {
    id: 1,
    title: "Shopping Cart",
    icon: <ShoppingCart />,
  },
  // STEP 2
  {
    id: 2,
    title: "Shipping Address",
    icon: <Truck />,
  },
  // STEP 3
  {
    id: 3,
    title: "Payment Method",
    icon: <CreditCard />,
  },
];

// <== CART PAGE COMPONENT ==>
const CartPage = (): JSX.Element => {
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
  // GETTING CART AND REMOVE CART ITEM FUNCTION FROM USE CART STORE
  const { cart, removeItem } = useCartStore();
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
                <ShoppingCart
                  className={`w-5 h-5 ${step.id === activeStep ? "text-gray-600" : "text-gray-200"}`}
                />
              )}
              {step.id === 2 && (
                <Truck
                  className={`w-5 h-5 ${step.id === activeStep ? "text-gray-600" : "text-gray-200"}`}
                />
              )}
              {step.id === 3 && (
                <CreditCard
                  className={`w-5 h-5 ${step.id === activeStep ? "text-gray-600" : "text-gray-200"}`}
                />
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
          <h2 className="font-semibold text-lg flex items-center gap-2 text-gray-600">
            <span className="mr-2">
              {STEPS.find((step) => step.id === activeStep)?.icon}
            </span>
            <span>{STEPS.find((step) => step.id === activeStep)?.title}</span>
          </h2>
          {/* CONDITIONALLY RENDERING STEPS */}
          {/* WHEN CART IS EMPTY */}
          {cart.length === 0 && activeStep === 1 ? (
            <div className="flex w-full h-full flex-col items-center justify-center gap-4">
              <p className="text-gray-600 font-semibold">
                Your cart is currently empty.
              </p>
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
          ) : null}
          {/* WHEN CART IS NOT EMPTY */}
          {activeStep === 1 ? (
            cart.length !== 0 &&
            cart.map((item) => (
              // SINGLE CART ITEM
              <div
                key={item.id + item.selectedSize + item.selectedColor}
                className="flex items-center justify-between"
              >
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
                        Size:{" "}
                        <span className="uppercase">{item.selectedSize}</span>
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Color:{" "}
                        <span className="uppercase">{item.selectedColor}</span>
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
                  onClick={() => removeItem(item)}
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
          <h2 className="font-semibold flex items-center gap-2 text-lg text-gray-600">
            <span>Cart Details</span>
            <span>
              <ShoppingBag className="w-4 h-4" />
            </span>
          </h2>
          {/* INFO SECTION */}
          <div className="flex flex-col gap-4">
            {/* SUBTOTAL */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">Subtotal</p>
              <p className="text-sm font-semibold text-gray-600">
                ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </p>
            </div>
            {/* DISCOUNT */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                Discount (10%)
              </p>
              <p className="text-sm font-semibold text-gray-600">
                $
                {cart
                  .reduce(
                    (acc, item) => acc + item.price * item.quantity * 0.1,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
            {/* SHIPPING FEE */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                Shipping Fee
              </p>
              <p className="text-sm font-semibold text-gray-600">
                {cart.length > 0 ? "$5.00" : "$0.00"}
              </p>
            </div>
            {/* HORIZONTAL LINE */}
            <hr className="border-2 border-gray-200" />
            {/* TOTAL */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-600">Total</p>
              <p className="text-lg font-semibold text-gray-600">
                $
                {cart
                  .reduce(
                    (acc, item) =>
                      acc +
                      item.price * item.quantity -
                      item.price * item.quantity * 0.1 +
                      5,
                    0,
                  )
                  .toFixed(2)}
              </p>
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
