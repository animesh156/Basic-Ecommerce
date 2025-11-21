import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type ItemProps = {
  image: string;
  badgeText?: string;
  company: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  badgeColor: string;
  type: string;
  id: number
};

export default function ItemCard2({
  image,
  badgeText = "-20%",
  company,
  name,
  price,
  originalPrice,
  rating,
  badgeColor,
  type,
  id
}: ItemProps) {
  return (
    <Link to={`/product/${id}`}>
    <div className="w-[200px] h-[300px] rounded-xl border border-gray-100 overflow-hidden bg-white ">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-36 m-auto object-cover rounded-t-xl"
        />

        {/* Badge Top Right */}
        <div
          className="absolute -top-1 -left-1.5 w-14 text-center text-white rounded-b-lg px-2.5 py-1.5 text-[8px] font-semibold"
          style={{ backgroundColor: badgeColor }}
        >
          {badgeText}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <p className="text-[#ADADAD] font-lato text-[10px]">{type}</p>

        <h3 className="text-[#253D4E] font-quicksand font-bold text-sm mt-1">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 ">
          <FaStar className="text-[9px] text-yellow-400" />
          <span className="text-[#B6B6B6] text-[12px] font-lato">
            ({rating.toFixed(1)})
          </span>
        </div>

        <p className="font-lato font-normal text-[11px] text-[#3BB77E]">
          <span className="text-[#B6B6B6]">By</span> {company}
        </p>

        <div className="flex items-center mt-5 justify-between">
          {/* Pricing */}
          <div className="space-x-2   font-quicksand">
            <span className="text-[#3BB77E] text-[11px] font-bold ">
              ${price}
            </span>
            <span className="text-[#ADADAD] text-[11px] font-bold text-sm line-through">
              ${originalPrice}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className=" bg-[#F53E32] text-white py-1 px-3  text-[10px] font-semibold transition">
            Add
          </button>
        </div>
      </div>
    </div>
    </Link>
    
  );
}
