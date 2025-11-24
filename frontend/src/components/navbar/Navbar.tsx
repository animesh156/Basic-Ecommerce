import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type NavLink = {
  link: string;
  dropDown: boolean;
  route: string;
};

type NavbarProps = {
  topLinks: NavLink[];
};

export default function Navbar({ topLinks }: NavbarProps) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-around py-3 shadow-md border-b border-b-[#e7dede]">
      <div className="border p-2 rounded-sm  border-[#E9E9E9] h-8 w-8">
        <img src="/header/icon.png" />
      </div>

      {/* Left Links */}
      <div className="flex items-center gap-3">
        {topLinks.map((item) => (
          <button
            key={item.link}
            onClick={() => navigate(item.route)}
            className="flex items-center gap-1 text-[12px] text-[#000000] font-medium font-poppins cursor-pointer"
          >
            {item.link}

            {/* Show arrow ONLY when dropDown === true */}
            {item.dropDown && <IoIosArrowDown className="text-xs mt-0.5" />}
          </button>
        ))}
      </div>

      {/* Phone Number */}
      <p className="hidden md:flex items-center gap-2 text-sm text-gray-700">
        <BsTelephone />
        +123 (456) (7890)
      </p>

      {/* Hamburger Menu */}
      <button className="text-xl md:hidden">
        <FiMenu />
      </button>
    </div>
  );
}
