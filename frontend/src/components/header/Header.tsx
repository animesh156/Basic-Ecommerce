import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import Navbar from "../navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";

export default function Header() {
  const topLinks = [
    {
      link: "Home",
      dropDown: false,
    },
    {
      link: "Category",
      dropDown: true,
    },
    {
      link: "Products",
      dropDown: true,
    },
  ];

  return (
    <nav className="w-full shadow-md">
      {/* ------------------------ ROW 1 (Navbar Component) ------------------------ */}
      <Navbar topLinks={topLinks} />

      {/* ------------------------ ROW 2 ------------------------ */}
      <div className="flex items-center justify-between px-36 py-4 bg-white">
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
          <div className="flex items-center w-[580px] border border-[#64B496] rounded-md overflow-hidden h-12">
            {/* Input */}
            <input
              type="text"
              placeholder="Search For Items..."
              className="flex-1 px-4 text-sm outline-none h-full flex items-center"
            />

            {/* Category Button */}
            <button className="px-4 text-[12px] flex items-center gap-1 h-full border-l border-l-[#64B496]">
              All Categories <IoIosArrowDown />
            </button>

            {/* Search Button */}
            <button className="w-14 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center h-full">
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

          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <FiShoppingCart />
            <span className="text-[13px] font-medium">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
