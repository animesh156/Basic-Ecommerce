import React from "react";

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
          <div
            key={product.id}
            className="relative w-[350px] h-[200px] rounded-md border border-white overflow-hidden"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 max-w-24 left-6 bottom-10 flex flex-col justify-end">
              <h4 className="font-semibold text-xs">{product.text}</h4>

              <button className="mt-3 w-14 bg-[#df2828] text-white px-1 py-2 rounded-md text-[7px] font-medium hover:bg-[#339d67] transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default FeatureProducts;
