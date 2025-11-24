import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import Navbar from "../navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { useCartStore } from "../../features/store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.length;

  const navigate = useNavigate();

  const topLinks = [
    {
      link: "Home",
      dropDown: false,
      route: "/",
    },
    {
      link: "Category",
      dropDown: true,
      route: "/",
    },
    {
      link: "Products",
      dropDown: true,
      route: "/",
    },
  ];

  return (
    <nav className="w-full">
      {/* ------------------------ ROW 1 (Navbar Component) ------------------------ */}
      <Navbar topLinks={topLinks} />

      {/* ------------------------ ROW 2 ------------------------ */}
      <div className="flex items-center justify-between px-36 border-b border-b-[#E9E9E9] py-2 bg-white">
        <div className="flex items-center space-x-11">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/avatar.png"
              alt="Foodzy Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-col">
              <h2 className="text-[20px] font-arial font-extrabold text-black">
                Foodzy
              </h2>
              <p className="text-[#221F1F] font-semibold text-[11px]">
                {" "}
                A Treasure of Tastes
              </p>
            </div>
          </div>

          {/* Search Bar + Categories */}
          <div className="flex items-center w-[580px] rounded-md overflow-hidden h-12">
            {/* Input */}
            <input
              type="text"
              placeholder="Search For Items..."
              className="flex-1 px-4 text-sm outline-none h-full border border-[#64B496] border-r-0 rounded-l-md"
            />

            {/* Category Button */}
            <button className="px-4 text-[12px] flex items-center gap-2 space-x-1.5 h-full border border-[#64B496] border-l border-r-0">
              All Categories <IoIosArrowDown size={14} />
            </button>

            {/* Search Button */}
            <button className="w-14 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center h-full border border-red-500 rounded-r-md">
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Icons (Right) */}
        <div className="flex items-center gap-3 font-poppins">
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <LuUser />
            <span className="text-[13px] font-medium">Account</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <FiHeart />
            <span className="text-[13px] font-medium">Wishlist</span>
          </div>

          <div
            className="relative flex items-center gap-1 cursor-pointer hover:text-red-500"
            onClick={() => navigate("/checkout")}
          >
            <FiShoppingCart className="text-lg" />

            {/* 🔴 Dynamic Count Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}

            <span className="text-[13px] font-medium">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
