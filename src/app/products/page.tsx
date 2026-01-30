// <== IMPORTS ==>
import { JSX } from "react";
import ProductList from "@/components/ProductList";

// <== PRODUCTS PAGE COMPONENT ==>
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}): Promise<JSX.Element> => {
  // GETTING CATEGORY FROM SEARCH PARAMS
  const category = (await searchParams).category;
  // RETURNING PRODUCTS PAGE COMPONENT
  return (
    // MAIN CONTAINER
    <div className="mt-4">
      <ProductList category={category} params="products" />
    </div>
  );
};

// <== EXPORTING PRODUCTS PAGE COMPONENT ==>
export default ProductsPage;
