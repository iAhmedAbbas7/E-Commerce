// <== IMPORTS ==>
import {
  CalendarDaysIcon,
  CheckCircle2,
  CreditCard,
  Lock,
  User,
} from "lucide-react";
import { JSX } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormSchemaType, PaymentFormType } from "@/types/types";

// <== PAYMENT FORM COMPONENT ==>
const PaymentForm = (): JSX.Element => {
  // USING USE FORM HOOK
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormType>({
    resolver: zodResolver(PaymentFormSchemaType),
  });
  // HANDLING PAYMENT FORM SUBMISSION
  const handlePaymentForm: SubmitHandler<PaymentFormType> = () => {};
  // RETURNING PAYMENT FORM COMPONENT
  return (
    // MAIN CONTAINER
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* CARD HOLDER NAME FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="name" className="font-medium text-gray-600">
          Name on Card
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <User className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("cardHolderName")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10 "
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.cardHolderName && (
          <p className="text-red-500 text-sm">
            {errors.cardHolderName.message}
          </p>
        )}
      </div>
      {/* CARD NUMBER FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="cardNumber" className="font-medium text-gray-600">
          Card Number
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <CreditCard className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            {...register("cardNumber")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
        )}
      </div>
      {/* EXPIRATION DATE FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="expirationDate" className="font-medium text-gray-600">
          Expiration Date
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <CalendarDaysIcon className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="tel"
            id="expirationDate"
            placeholder="MM/YY"
            {...register("expirationDate")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.expirationDate && (
          <p className="text-red-500 text-sm">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      {/* CVC FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="cvc" className="font-medium text-gray-600">
          CVC
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <Lock className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="cvc"
            placeholder="123"
            {...register("cvc")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.cvc && (
          <p className="text-red-500 text-sm">{errors.cvc.message}</p>
        )}
      </div>
      {/* IMAGES SECTION */}
      <div className="flex items-center gap-2">
        <Image
          src={"/klarna.png"}
          alt="Klarna"
          height={70}
          width={40}
          className="rounded-md"
        />
        <Image
          src={"/cards.png"}
          alt="Cards"
          height={70}
          width={40}
          className="rounded-md"
        />
        <Image
          src={"/stripe.png"}
          alt="Stripe"
          height={70}
          width={40}
          className="rounded-md"
        />
      </div>
      {/* BUTTON */}
      <button
        type="submit"
        className="w-full text-white bg-gray-600 hover:bg-gray-700 font-semibold cursor-pointer p-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all duration-300"
      >
        Checkout <CheckCircle2 className="w-4 h-4" />
      </button>
    </form>
  );
};

// <== EXPORTING PAYMENT FORM COMPONENT ==>
export default PaymentForm;
