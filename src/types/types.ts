// <== IMPORTS  ==>
import { email, z } from "zod";

// <== PRODUCT TYPE ==>
export type ProductType = {
  // <== PRODUCT ID ==>
  id: string | number;
  // <== PRODUCT NAME ==>
  name: string;
  // <== PRODUCT DESCRIPTION ==>
  description: string;
  // <== PRODUCT SHORT DESCRIPTION ==>
  shortDescription: string;
  // <== PRODUCT PRICE ==>|
  price: number;
  // <== PRODUCT CATEGORY ==>
  sizes: string[];
  // <== PRODUCT TAGS ==>
  colors: string[];
  // <== PRODUCT IMAGES ==>
  images: Record<string, string>;
};

// <== CART ITEM TYPE ==>
export type CartItemType = {
  // <== PRODUCT ID ==>
  id: string | number;
  // <== PRODUCT NAME ==>
  name: string;
  // <== PRODUCT DESCRIPTION ==>
  description: string;
  // <== PRODUCT SHORT DESCRIPTION ==>
  shortDescription: string;
  // <== PRODUCT PRICE ==>|
  price: number;
  // <== PRODUCT CATEGORY ==>
  sizes: string[];
  // <== PRODUCT TAGS ==>
  colors: string[];
  // <== PRODUCT IMAGES ==>
  images: Record<string, string>;
  // <== SELECTED SIZE ==>
  selectedSize: string;
  // <== SELECTED COLOR ==>
  selectedColor: string;
  // <== SELECTED QUANTITY ==>
  quantity: number;
};

// <== PRODUCT LIST TYPE ==>
export type ProductListType = ProductType[];

// <== CART ITEM LIST TYPE ==>
export type CartItemListType = CartItemType[];

// <== SHIPPING FORM SCHEMA TYPE ==>
export const ShippingFormSchemaType = z.object({
  // <== NAME FIELD ==>
  name: z.string().min(3, "Name must be at least 3 characters long"),
  // <== EMAIL FIELD ==>
  email: email("Invalid email address"),
  // <== PHONE FIELD ==>
  phone: z
    .string()
    .min(10, "Phone number must be between 7 and 12 digits")
    .max(15, "Phone number must be between 7 and 12 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  // <== ADDRESS FIELD ==>
  address: z.string().min(1, "Address is required"),
  // <== CITY FIELD ==>
  city: z.string().min(1, "City is required"),
});

// <== SHIPPING FORM TYPE ==>
export type ShippingFormType = z.infer<typeof ShippingFormSchemaType>;

// <== PAYMENT FORM SCHEMA TYPE ==>
export const PaymentFormSchemaType = z.object({
  // <== CARD HOLDER NAME FIELD ==>
  cardHolderName: z.string().min(3, "Card Holder Name is required"),
  // <== CARD NUMBER FIELD ==>
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(16, "Card number must be at most 16 digits")
    .regex(/^[0-9]+$/, "Card number must contain only digits"),
  // <== EXPIRATION DATE FIELD ==>
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiration date must be in MM/YY format",
    ),
  // <== CVV FIELD ==>
  cvc: z
    .string()
    .min(3, "CVC must be at least 3 digits")
    .max(4, "CVC must be at most 4 digits")
    .regex(/^[0-9]+$/, "CVC must contain only digits"),
});

// <== PAYMENT FORM TYPE ==>
export type PaymentFormType = z.infer<typeof PaymentFormSchemaType>;

// <== CART STORE TYPE ==>
export type CartStoreStateType = {
  // <== CART STATE ==>
  cart: CartItemListType;
  // <== HAS HYDRATION FINISHED STATE ==>
  hasHydrationFinished: boolean;
  // <== SET HAS HYDRATION FINISHED ==>
  setHasHydrationFinished: (value: boolean) => void;
};

// <== CART STORE ACTIONS TYPE ==>
export type CartStoreActionsType = {
  // <== ADD ITEM TO CART ==>
  addItem: (item: CartItemType) => void;
  // <== REMOVE ITEM FROM CART ==>
  removeItem: (item: CartItemType) => void;
  // <== CLEAR CART ==>
  clearCart: () => void;
};
