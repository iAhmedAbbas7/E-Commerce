// <== IMPORTS ==>
import { JSX } from "react";
import Image from "next/image";

// <== HOMEPAGE COMPONENT ==>
const Homepage = (): JSX.Element => {
  // RETURNING HOMEPAGE COMPONENT
  return (
    <div className="">
      {/* BANNER IMAGE */}
      <div className="relative aspect-[3/1] mb-12">
        <Image src={"/featured.png"} alt="Featured Product" fill />
      </div>
    </div>
  );
};

// <== EXPORT HOMEPAGE COMPONENT ==>
export default Homepage;
