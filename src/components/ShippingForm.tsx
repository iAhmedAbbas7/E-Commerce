// <== IMPORTS ==>
import { JSX } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormSchemaType, ShippingFormType } from "@/types/types";
import { ArrowRight, Home, Mail, MapPin, Phone, User } from "lucide-react";

// <== SHIPPING FORM COMPONENT ==>
const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormType) => void;
}): JSX.Element => {
  // USING USE FORM HOOK
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormType>({
    resolver: zodResolver(ShippingFormSchemaType),
  });
  // USING USE ROUTER HOOK
  const router = useRouter();
  // HANDLING SHIPPING FORM SUBMISSION
  const handleShippingForm: SubmitHandler<ShippingFormType> = (data) => {
    // SETTING SHIPPING FORM DATA
    setShippingForm(data);
    // NAVIGATING TO PAYMENT STEP
    router.push("/cart?step=3", { scroll: false });
  };
  // RETURNING SHIPPING FORM COMPONENT
  return (
    // MAIN CONTAINER
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      {/* NAME FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="name" className="font-medium text-gray-600">
          Name
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <User className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10 "
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      {/* EMAIL FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="email" className="font-medium text-gray-600">
          Email
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <Mail className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            {...register("email")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      {/* PHONE FIELD */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="phone" className="font-medium text-gray-600">
          Phone
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <Phone className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="tel"
            id="phone"
            placeholder="(123) 456-7890"
            {...register("phone")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      {/* ADDRESS */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="address" className="font-medium text-gray-600">
          Address
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <MapPin className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="address"
            placeholder="123 Main Street"
            {...register("address")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      {/* CITY */}
      <div className="flex flex-col gap-1">
        {/* LABEL */}
        <label htmlFor="city" className="font-medium text-gray-600">
          City
        </label>
        {/* INPUT FIELD */}
        <div className="relative w-full">
          <Home className="absolute left-2 top-2.5 w-6 h-6 text-gray-500" />
          <input
            type="text"
            id="city"
            placeholder="New York"
            {...register("city")}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition-all duration-300 pl-10"
          />
        </div>
        {/* ERROR MESSAGE */}
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>
      {/* BUTTON */}
      <button
        type="submit"
        className="w-full text-white bg-gray-600 hover:bg-gray-700 font-semibold cursor-pointer p-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all duration-300"
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

// <== EXPORTING SHIPPING FORM COMPONENT ==>
export default ShippingForm;
