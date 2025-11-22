import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F8] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1. Brand + Address */}
        <div className="text-[#777777] text-sm space-y-3">
          <div className="flex flex-col gap-3 text-sm text-[#777777]">
            {/* Avatar + Brand Name */}
            <div className="flex items-center gap-3">
              <img
                src="/avatar.png" 
                alt="Foodzy Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-col">
                <h2 className="text-[18px] font-arial font-bold text-black">
                  Foodzy
                </h2>
                <p className="text-[#818181] font-medium text-[10px]">
                  {" "}
                  A Treasure of Tastes
                </p>
              </div>
            </div>

            {/* Small paragraph under brand name */}
            <p className="text-[#7A7A7A] font-poppins font-normal text-[12px] max-w-xs">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start mt-2 gap-2">
            <IoLocationOutline className="text-[#F53E32] mt-1" size={22} />
            <span className="text-[13px]">
              51 Green St. Huntington, Ohio Beach Ontario, NY 11746 KY 4783,
              USA.
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <RiMailSendLine className="text-[#F53E32]" size={14} />
            <span>example@email.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <BsTelephone className="text-[#F53E32]" size={12} />
            <span>+91 123 4567890</span>
          </div>
        </div>

        {/* 2. Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-[#777777] text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
          </ul>
        </div>

        {/* 3. Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-[#777777] text-sm">
            <li>
              <a href="#">Dairy & Bakery</a>
            </li>
            <li>
              <a href="#">Fruits & Vegetable</a>
            </li>
            <li>
              <a href="#">Snack & Spice</a>
            </li>
            <li>
              <a href="#">Juice & Drinks</a>
            </li>
            <li>
              <a href="#">Chicken & Meat</a>
            </li>
            <li>
              <a href="#">Fast Food</a>
            </li>
          </ul>
        </div>

        {/* 4. Newsletter + Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Subscribe Our Newsletter
          </h3>

          {/* Input box with left icon inside */}
          {/* Input box with right icon inside */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Search here"
              className="w-full pr-10 pl-4 py-2 bg-white border border-[#E9E9E9] rounded-md text-sm outline-none focus:border-gray-500"
            />
            <FaTelegramPlane className="absolute right-3 top-1/2 -translate-y-1/2 text-[#000000] text-lg" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-6">
            <div className="bg-white p-2 cursor-pointer">
              <RiFacebookLine className="" size={14} />
            </div>

            <div className="bg-white p-2  cursor-pointer">
              <FaXTwitter className="" size={14} />
            </div>

            <div className="bg-white p-2  cursor-pointer">
              <FaXTwitter className="" size={14} />
            </div>

            <div className="bg-white p-2  cursor-pointer">
              <FaInstagram className="" size={14} />
            </div>
          </div>

          {/* 5 Image Boxes */}
          <div className="flex gap-3 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-36 h-14 border-r-0 bg-white rounded-md border border-[#E9E9E9] overflow-hidden"
              >
                <img
                  src={`/footer-icons/icon${i}.jpg`}
                  alt={`icon-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 font-normal pt-6 text-center text-[14px] ">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#F53E32]">Foodzy</span>, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
