// <== IMPORTS ==>
import { JSX } from "react";
import Image from "next/image";
import ProductList from "@/components/ProductList";

// <== HOMEPAGE COMPONENT ==>
const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}): Promise<JSX.Element> => {
  // GETTING CATEGORY FROM SEARCH PARAMS
  const category = (await searchParams).category;
  // RETURNING HOMEPAGE COMPONENT
  return (
    <div className="">
      {/* BANNER IMAGE */}
      <div className="relative aspect-[3/1] mb-12">
        <Image src={"/featured.png"} alt="Featured Product" fill />
      </div>
      {/* PRODUCT LIST SECTION */}
      <ProductList category={category} params="homepage" />
    </div>
  );
};

// <== EXPORT HOMEPAGE COMPONENT ==>
export default Homepage;
