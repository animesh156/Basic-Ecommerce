import React from "react";
import BgImageCard from "../cards/BgImageCard";

type Product = {
  id: number;
  text: string;
  image: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    text: "Everyday Fresh & Clean with Our Products",
    image: "/product/img1.png",
  },
  {
    id: 2,
    text: "Make your Breakfast Healthy and Easy",
    image: "/product/img2.png",
  },
  {
    id: 3,
    text: "The best Organic Products Online",
    image: "/product/img3.png",
  },
];

const FeatureProducts: React.FC = () => {
  return (
    <div className="flex justify-evenly px-20">
      {dummyProducts.map((product) => (
        <BgImageCard key={product.id} product={product} textColor="black" textSize="text-[12px]" />
      ))}
    </div>
  );
};

export default FeatureProducts;
