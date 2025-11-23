import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Filters from "../components/filter/Filters";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PopularProductCard from "../components/cards/PopularProductCard";
import { useCartStore } from "../features/store/cartStore";
import toast from "react-hot-toast";

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
  quantity: number;
};

const popularProducts = [
  {
    id: 1,
    image: "/product/popular/img1.jpg",
    title: "Best snakes with hazel nut mix pack 200gm",
    type: "Snacks",
    price: "$120.25",
    actualPrice: "$120.25 ",
  },

  {
    id: 2,
    image: "/product/popular/img2.jpg",
    title: "Sweet snakes crunchy nut mix 250gm pack",
    type: "Snacks",
    price: "$100.00",
    actualPrice: "$110.00 ",
  },

  {
    id: 3,
    image: "/product/popular/img3.jpg",
    title: "Best snakes with hazel nut mix pack 200gm",
    type: "Snacks",
    price: "$120.25",
    actualPrice: "$123.25 ",
  },

  {
    id: 4,
    image: "/product/popular/img4.jpg",
    title: "Sweet snakes crunchy nut mix 250gm pack",
    type: "Snacks",
    price: "$100.00",
    actualPrice: "$110.00 ",
  },
];

const details = [
  { label: "Brand", value: "ESTA BETTERU CO" },
  { label: "Flavour", value: "Super Saver Pack" },
  { label: "Diet Type", value: "Vegetarian" },
  { label: "Weight", value: "200 Grams" },
  { label: "Speciality", value: "Gluten Free, Sugar Free" },
  { label: "Info", value: "Egg Free, Allergen-Free" },
  { label: "Items", value: "1" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  const navigate = useNavigate();

  const sizes = ["50kg", "80kg", "120kg", "200kg"];

  const tabs = ["Description", "Information", "Review"];

  const location = useLocation(); // gives current route on which we are

  const currentRoute = location.pathname.split("/")[1]; // remvoes first "/"

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating,
      quantity: quantity, // use selected quantity
      actualPrice: product.original_price,
    });
    toast.success("Item added to Cart!");
    setQuantity(1);
    navigate("/checkout");
  };

  if (loading) return <ProductSkeleton />;

  if (!product)
    return (
      <p className="text-center text-red-500 mt-10 text-xl">
        Product not found
      </p>
    );

  return (
    <div>
      <div className="bg-[#F53E32] py-4 flex justify-between  text-white">
        {/* To make first char UpperCase */}
        <h2 className="ml-40">
          {currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}
        </h2>

        <div className="mr-32">
          <p>Home - {currentRoute}</p>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="px-36 py-10">
        <div className="flex space-x-6">
          {/* COLUMN 1 → FILTER */}
          <div className="col-span-1">
            <Filters />
          </div>

          {/* COLUMN 2 */}
          <div className="flex-col">
            <div className="flex justify-evenly space-x-11 space-y-6">
              {/* COL 1 - PRODUCT IMAGE */}
              <div className="bg-[#F7F7F8] w-[380px] h-[510px] border border-[#E9E9E9] flex items-center justify-center p-6 rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-96 object-contain mix-blend-multiply"
                />
              </div>

              {/* COL 2 - PRODUCT DETAILS */}
              <div className="-mt-4 flex flex-col  w-[370px]">
                <div className="border-b-[#E9E9E9] border-b py-4.5">
                  <h2 className="text-[19px] font-normal text-[#2B2B2D]">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    iure minus error doloribus saepe natus?
                  </p>
                </div>

                {/* RATINGS */}

                <div className="flex mt-5 items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (product.rating >= star) {
                      return <FaStar key={star} className="text-[#F5885F]" />;
                    } else if (product.rating >= star - 0.5) {
                      return (
                        <FaStarHalfAlt key={star} className="text-[#F5885F]" />
                      );
                    } else {
                      return <FaRegStar key={star} className="text-gray-300" />;
                    }
                  })}

                  <span className="text-sm text-[#7A7A7A] font-normal">
                    ( 75 Review )
                  </span>
                </div>

                {/* PRODUCT INFO */}
                <ul className="space-y-1 mt-4">
                  {details.map((item) => (
                    <li key={item.label} className="flex">
                      <span className="w-32 font-medium">{item.label}</span>
                      <span className="mr-2">:</span>
                      <span className="text-[#777777]">{item.value}</span>
                    </li>
                  ))}
                </ul>

                {/* PRICE SECTION */}
                <div className="flex gap-1.5 mt-5">
                  <p className="text-[#F53E32] font-semibold text-[20px]">
                    ${product.price}
                  </p>
                  <p className="mt-1.5 text-[#7A7A7A] line-through font-normal">
                    ${product.original_price}
                  </p>
                </div>

                {/* SIZE/ WEIGHT */}
                <div className="mt-4 flex items-center">
                  <span className="w-32 font-medium text-[#2B2B2D] text-[18px]">
                    Size/Weight
                  </span>
                  <span className="mr-2">:</span>

                  <div className="flex gap-2">
                    {sizes.map((item) => (
                      <button
                        key={item}
                        onClick={() => setSelected(item)}
                        className={`px-2 py-1 rounded-sm border text-sm cursor-pointer
          ${
            selected === item
              ? "border-[#F53E32] bg-[#F53E32] text-white"
              : "border-gray-300 text-[#777777]"
          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add CART Button */}
                <div className="flex items-center gap-6 mt-6">
                  {/* Quantity Box */}
                  <div className="flex items-center gap-3">
                    {/* Number Box */}
                    <div className="w-12 h-12 border border-[#E9E9E9] rounded-sm flex items-center justify-center">
                      {quantity}
                    </div>

                    {/* Plus / Minus */}
                    <div className="flex flex-col space-y-1 justify-between h-12">
                      <button
                        className="w-5 h-5 border border-[#E9E9E9] rounded-sm flex items-center justify-center"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        +
                      </button>
                      <button
                        className="w-5 h-5 border border-[#E9E9E9] rounded-sm flex items-center justify-center"
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* Add To Cart */}
                  <button
                    className="bg-[#F53E32] cursor-pointer text-white px-6 py-2.5 rounded-md text-md font-bold transition"
                    onClick={() => handleCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            {/* PROPDUCT INFO */}
            <div className="border px-5  border-[#DEE2E6] rounded-md mt-6">
              {/* Tabs Header */}
              <div className="flex space-x-6 mt-5 border-b border-[#DEE2E6]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className=" text-[15px] font-bold text-[#2B2B2D]"
                  >
                    <span
                      className={`
            inline-block pb-5
            ${
              activeTab === tab
                ? "text-red-500 border-b-2 border-[#64B496]"
                : "text-[#2B2B2D]"
            }
          `}
                    >
                      {tab}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab && (
                <div className="p-4 text-sm leading-relaxed text-[#555] space-y-4">
                  <p className="font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error in vero sapiente odio, error dolore vero temporibus
                    consequatur, nobis veniam odit dignissimos consectetur quae
                    in perferendis doloribus debitis corporis, eaque dicta,
                    repellat amet, illum adipisci vel perferendis dolor! Quis
                    vel consequuntur repellat distinctio rem. Corrupti ratione
                    alias odio, error dolore temporibus consequatur, nobis
                    veniam odit laborum dignissimos consectetur quae vero in
                    perferendis provident quis.
                  </p>

                  <h4 className="text-[#2B2B2D] text-[16px] font-semibold">
                    Packaging & Delivery
                  </h4>

                  <hr className="border-[#DEE2E6]" />

                  <p className="font-poppins text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error in vero perferendis dolor! Quis vel consequuntur
                    repellat distinctio rem. Corrupti ratione alias odio, error
                    dolore temporibus consequatur, nobis veniam odit laborum
                    dignissimos consectetur quae vero in perferendis provident
                    quis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* POPULAR PRODUCTS */}
        <div className="mt-16 px-12">
          <div className="w-[480px] m-auto ">
            <h2 className="text-[#2B2B2D] text-center font-bold text-[28px]">
              Popular Products
            </h2>

            <p className="text-[#7A7A7A] font-poppins text-[12px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et viverra maecenas accumsan
              lacus vel facilisis.
            </p>
          </div>

          {/* CARDS POPULAR */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {popularProducts.map((item) => (
              <PopularProductCard key={item.id} {...item} />
            ))}
          </div>
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
