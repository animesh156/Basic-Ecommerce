import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";
import ItemCard2 from "../cards/ItemCard2";

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
};

const CACHE_KEY = "products_cache";
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export default function FoodProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // 1️⃣ Check LocalStorage
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          const parsed = JSON.parse(cached);

          // 使用缓存
          if (Date.now() - parsed.timestamp < CACHE_DURATION) {
            setProducts(parsed.data);
            setLoading(false);
            return;
          }
        }

        // 2️⃣ Fetch from API
        const res = await fetchProducts();
        const freshData = res.data as Product[];

        setProducts(freshData);

        // Save to local storage
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: freshData,
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section className="px-28 m-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#253D4E] text-[22px] font-bold font-quicksand">
          Popular Products
        </h3>

        <ul className="font-quicksand px-6 text-[#253D4E] flex text-[12px] gap-2 font-semibold">
          <li className="text-[#3BB77E]">All</li>
          <li>Milk & Diaries</li>
          <li>Coffes & Teas</li>
          <li>Pet Foods</li>
          <li>Meats</li>
          <li>Vegetables</li>
          <li>Fruits</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {loading
          ? //  🔵 Skeleton Loader —
            Array.from({ length: 10 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))
          : products.map((product) => (
              <ItemCard2
                key={product.id}
                image={product.image}
                type={product.type}
                company={product.company}
                name={product.name}
                price={Number(product.price)}
                originalPrice={Number(product.original_price)}
                rating={Number(product.rating)}
                badgeText={product.badge_text}
                badgeColor={product.badge_color}
                id={Number(product.id)}
              />
            ))}
      </div>
    </section>
  );
}

// ⭐ Reusable Tailwind Skeleton Card
function ProductSkeleton() {
  return (
    <div className="animate-pulse p-3 rounded-xl border border-gray-200 shadow-sm">
      <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>

      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>

      <div className="flex justify-between mt-3">
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
}
