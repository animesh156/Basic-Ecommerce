import { FiSend } from "react-icons/fi";

export default function FooterImg() {
  return (
    <div
      className="max-w-6xl relative mx-auto h-[300px] bg-center bg-cover bg-no-repeat rounded-xl"
      style={{
        backgroundImage: `url('/footer-icons/footer-bg.png')`,
      }}
    >
      <div className="font-poppins absolute left-20 top-1/2 -translate-y-1/2 max-w-xs space-y-3">
        {/* Main Title */}
        <h2 className="text-[20px] text-[#253D4E] font-bold leading-tight">
          Stay home & get your daily needs from our shop
        </h2>

        {/* Description Text */}
        <p className="text-[#7A7A7A] font-medium text-[10px]">
          Start You'r Daily Shopping with Nest Mart
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
            className="w-full border bg-white border-[#ccc] rounded-3xl py-3 pl-10 pr-0 text-[12px] outline-none"
          />

          {/* Subscribe Button (inside input on the right) */}
          <button className="absolute right-3.5 bg-[#F53E32] text-white px-6 py-3 rounded-3xl text-[12px] font-medium">
            Subscribe
          </button>
        </div>
      </div>
      

       <div className="absolute bottom-0.5 right-0">
        <img src="/footer-icons/banner.png" className="w-96" />
      </div>


    </div>
  );
}
