import React from "react";
import { PrimaryButton } from "../buttons";

export default function ProductItem({ product, onAddToCart }) {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] shadow-sm rounded-lg p-7 w-[23%] bg-[color:var(--componentBg)]">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-[color:var(--secondaryFrontColor)]">Vegetable</p>
      <br />
      <h3 className="font-bold text-orange-400 text-xl">$ 50</h3>
      <button className="w-full py-3 text-md text-white bg-[color:var(--primaryColor)] mt-4 rounded-md font-semibold">
        Add To Cart
      </button>
    </div>
  );
}
