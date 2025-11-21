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
    <div className="px-20 py-10">
      <Filters />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            className="w-full rounded-xl shadow"
            alt={product.name}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#253D4E]">{product.name}</h2>

          <p className="text-sm text-gray-500 mt-2">{product.company}</p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-3xl font-bold text-[#3BB77E]">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400">
              ₹{product.original_price}
            </span>
          </div>

          <button className="mt-6 bg-[#3BB77E] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#2a9c68]">
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
