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

// <== PRODUCT LIST TYPE ==>
export type ProductListType = ProductType[];
