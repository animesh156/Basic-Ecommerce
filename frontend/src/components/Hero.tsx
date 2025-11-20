import React from "react";
import { FiSend } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F0F0F0] relative h-[500px] w-full">
      {/* -------------------------------------------
        Content Block (Left side)
        Positioned vertically centered and shifted 
        slightly from the left for balanced layout
      -------------------------------------------- */}
      <div className="font-poppins absolute left-20 top-1/2 -translate-y-1/2 max-w-xs space-y-3">
        {/* Small heading with red underline */}
        <h5 className="text-[#212529] font-semibold">
          <span className="text-[#F53E32] underline decoration-red-500 decoration-2">
            100%
          </span>{" "}
          Organic Vegetables
        </h5>

        {/* Main Title */}
        <h1 className="text-[28px] font-bold leading-tight">
          The best way to stuff your wallet.
        </h1>

        {/* Description Text */}
        <p className="text-[#7A7A7A] font-medium text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis beatae consequuntur.
        </p>

        {/* -------------------------------------------
            Input field + Subscribe button + left icon
            Using relative wrapper to place both
        -------------------------------------------- */}
        <div className="relative mt-2 w-full">
          {/* Left Email Icon */}
          <FiSend className="absolute left-3 top-1/2 -translate-y-1/2 text-[#838383] text-[12px]" />

          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border border-[#ccc] rounded-3xl py-3 pl-10 pr-0 text-[12px] outline-none"
          />

          {/* Subscribe Button (inside input on the right) */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#3BB77E] text-white px-6 py-3 rounded-3xl text-[12px] font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* -------------------------------------------
        Decorative Images (Positioned around the hero)
      -------------------------------------------- */}

      {/* Main cabbage image at bottom-right */}
      <div className="absolute bottom-0 right-0">
        <img src="/hero/cabbage.png" className="w-80" />
      </div>

      {/* Small floating image near center-right */}
      <div className="absolute bottom-11 right-1/3">
        <img src="/hero/img1.png" className="w-13 block" />
      </div>

      {/* Bottom-left overlay image */}
      <div className="absolute bottom-2 left-0">
        <img src="/hero/img2.png" className="w-13 block contrast-0" />
      </div>

      {/* Top-middle decoration */}
      <div className="absolute top-0 left-1/2">
        <img src="/hero/img3.png" className="w-13 block" />
      </div>

      {/* Top-left small decoration */}
      <div className="absolute top-0 left-0">
        <img src="/hero/img4.png" className="w-7 block" />
      </div>
    </section>
  );
};

export default Hero;
