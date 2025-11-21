import { FaStar, FaShoppingCart } from "react-icons/fa";

type DealsCardProps = {
  image: string;
  title: string;
  company: string;
  price: number;
  originalPrice: number;
  buttonText?: string;
  rating: number;
};

export default function DealsCard({
  image,
  title,
  company,
  price,
  originalPrice,
  buttonText = "Shop Now",
  rating,
}: DealsCardProps) {
  return (
    <div className="relative w-[350px] h-[420px] rounded-xl overflow-visible">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/* Absolute Info Box - Half outside */}
      <div
        className="
        absolute left-4.5
        bottom-36
        translate-y-1/2 
        bg-white 
        px-4
        py-3
        rounded-xl 
        shadow-lg 
        w-56
      "
      >
        <h3 className="text-[#253D4E]  font-quicksand font-bold text-[13px]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 ">
          <FaStar className="text-[9px] text-yellow-400" />
          <span className="text-[#B6B6B6] text-[12px] font-lato">
            ({rating.toFixed(1)})
          </span>
        </div>

        <p className="text-[#3BB77E] text-[12px] mt-1">
          <span className="text-[#7E7E7E]">By</span> {company}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[#3BB77E] font-semibold text-[15px]">
              ${price}
            </span>
            <span className="text-gray-400 text-[15px] line-through">
              ${originalPrice}
            </span>
          </div>

          {/* Button with Cart Icon */}
          <button className="mt-3 flex items-center gap-2 bg-[#F53E32] text-white px-4 py-2 rounded-md text-sm font-mono transition">
            <FaShoppingCart className="text-[12px]" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
