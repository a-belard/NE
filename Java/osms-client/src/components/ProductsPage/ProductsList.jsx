import React, { useState, useEffect } from "react";
import { get } from "../../utils/api";
import ProductItem from "./ProductItem";
import { cartState, addToCart, removeFromCart } from "../../atoms/cartAtom";
import { useRecoilState } from "recoil";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (item) => {
    setCart(addToCart(item));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await get("/products/", {}, true);
        setProducts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.code}
            onAddToCart={(item) => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
