import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filters from "../components/filter/Filters";

type Product = {
  id: number;
  image: string;
  company: string;
  name: string;
  price: number;
  original_price: number;
  rating: number;
  badge_text?: string;
  badge_color: string;
  type: string;
  description?: string;
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("products_cache");

    if (cached) {
      const parsed = JSON.parse(cached);
      const allProducts: Product[] = parsed.data;

      const found = allProducts.find((p) => p.id === Number(id));

      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (found) setProduct(found);
    }

    setLoading(false);
  }, [id]);

  if (loading) return <ProductSkeleton />;

  if (!product)
    return (
      <p className="text-center text-red-500 mt-10 text-xl">
        Product not found
      </p>
    );

 return (
  <div className="px-10 py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* COLUMN 1 → FILTER */}
      <div className="col-span-1">
        <Filters />
      </div>

      {/* COLUMN 2 → PRODUCT IMAGE */}
      <div className="col-span-1 flex justify-center">
        <img
          src={product.image}
          className="w-full max-w-sm rounded-xl shadow"
          alt={product.name}
        />
      </div>

      {/* COLUMN 3 → PRODUCT DETAILS */}
      <div className="col-span-1 flex flex-col justify-start">
        <h2 className="text-3xl font-bold text-[#253D4E]">{product.name}</h2>

        <p className="text-sm text-gray-500 mt-2">{product.company}</p>

        {/* PRICE BLOCK */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-3xl font-bold text-[#3BB77E]">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400 text-lg">
            ₹{product.original_price}
          </span>

          {/* DISCOUNT */}
          <span className="text-sm text-white bg-[#3BB77E] px-2 py-1 rounded">
            {Math.round(
              ((product.original_price - product.price) /
                product.original_price) * 100
            )}
            % OFF
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-5 leading-relaxed">
          {product.description ||
            "No description available for this product."}
        </p>

        {/* RATINGS */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-sm text-gray-700 font-medium">
            {product.rating} / 5
          </span>
        </div>

        {/* ADD TO CART */}
        <button className="mt-6 bg-[#3BB77E] text-white px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#2a9c68] transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

}

function ProductSkeleton() {
  return (
    <div className="px-20 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-80 bg-gray-200 rounded-xl"></div>

        <div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="h-20 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
