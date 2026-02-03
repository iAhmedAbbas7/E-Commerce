// <== IMPORTS ==>
import Image from "next/image";
import { ProductType } from "@/types/types";
import ProductInteraction from "@/components/ProductInteraction";

// <== PRODUCT STATIC DATA ==>
const PRODUCT: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

// <== PRODUCT PAGE COMPONENT ==>
const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ size: string; color: string }>;
}) => {
  // USING SEARCH PARAMS TO GET SIZE AND COLOR
  const { size, color } = await searchParams;
  // SETTING SELECTED PRODUCT SIZE
  const selectedSize = size || PRODUCT.sizes[0];
  // SETTING SELECTED PRODUCT COLOR
  const selectedColor = color || PRODUCT.colors[0];
  // RETURNING PRODUCT PAGE COMPONENT
  return (
    // MAIN CONTAINER
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* PRODUCT IMAGES SECTION */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={PRODUCT.images[selectedColor]}
          alt={PRODUCT.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* PRODUCT DETAILS SECTION */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        {/* PRODUCT NAME */}
        <h1 className="text-2xl font-medium text-gray-600">{PRODUCT.name}</h1>
        {/* PRODUCT DESCRIPTION */}
        <p className="text-gray-500 text-sm">{PRODUCT.description}</p>
        {/* PRODUCT PRICE */}
        <h2 className="text-xl font-semibold text-gray-700">
          ${PRODUCT.price.toFixed(2)}
        </h2>
        {/* PRODUCT INTERACTION SECTION */}
        <div>
          <ProductInteraction
            product={PRODUCT}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        </div>
        {/* PAYMENT INFO */}
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
        {/* POLICY TEXT */}
        <p className="text-xs text-gray-600">
          By CLicking Pay Now you agree to our{" "}
          <span className="cursor-pointer underline underline-offset-4 hover:text-gray-700">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="cursor-pointer underline underline-offset-4 hover:text-gray-700">
            Privacy Policy
          </span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our{" "}
          <span className="cursor-pointer underline underline-offset-4 hover:text-gray-700">
            Return and Refund Policies.
          </span>
        </p>
      </div>
    </div>
  );
};

// <== EXPORTING PRODUCT PAGE COMPONENT ==>
export default ProductPage;
