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
