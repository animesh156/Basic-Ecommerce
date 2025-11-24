import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../features/store/cartStore";
import toast from "react-hot-toast";

type DealsCardProps = {
  image: string;
  title: string;
  company: string;
  price: number;
  originalPrice: number;
  buttonText?: string;
  rating: number;
  id: number;
};

export default function DealsCard({
  image,
  title,
  company,
  price,
  originalPrice,
  buttonText = "Shop Now",
  rating,
  id,
}: DealsCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const navigate = useNavigate();

   /** Add to Cart without opening product page */
  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); //  stops card click
    e.preventDefault(); // stops Link navigation

    addToCart({
      id,
      name:title,
      price,
      image,
      rating,
      quantity: 1,
      actualPrice: originalPrice,
    });

    toast.success("Item added to cart!");
  };

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="relative cursor-pointer w-[350px] h-[420px] rounded-xl overflow-visible"
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/* Floating info box (half outside image) */}
      <div
        className="
        absolute left-4.5
        bottom-36
        translate-y-1/2 
        bg-white 
        px-4
        py-3
        rounded-xl 
        shadow-md
        w-56
      "
      >
        {/* Product Title */}
        <h3 className="text-[#253D4E] font-quicksand font-bold text-[13px]">
          {title}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 ">
          <FaStar className="text-[9px] text-yellow-400" />
          <span className="text-[#B6B6B6] text-[12px] font-lato">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Company / Brand */}
        <p className="text-[#3BB77E] text-[12px] mt-1">
          <span className="text-[#7E7E7E]">By</span> {company}
        </p>

        {/* Price + Button Row */}
        <div className="flex justify-between items-center">
          {/* Price Section */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[#3BB77E] font-semibold text-[15px]">
              ${price}
            </span>

            {/* Original Price (Striked Through) */}
            <span className="text-gray-400 text-[15px] line-through">
              ${originalPrice}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
           onClick={handleAdd}
           className="mt-3 flex cursor-pointer items-center gap-2 bg-[#F53E32] text-white px-4 py-2 rounded-md text-sm font-mono transition">
            <FaShoppingCart className="text-[12px]" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
