import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../features/store/cartStore";
import { verifyOTP, sendOTP, placeOrders } from "../utils/api";
import toast from "react-hot-toast";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  // const [delivery, setDelivery] = useState("standard");

  const [isVerified, setVerified] = useState(false);

  const location = useLocation(); // gives current route on which we are

  const navigate = useNavigate();

  const currentRoute = location.pathname.substring(1); // remvoes first "/"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Zustand cart store
  const cartItems = useCartStore((state) => state.cart);
  const subtotal = useCartStore((state) => state.subtotal)();
  const clearCart = useCartStore((state) => state.clearCart);

  const sanitizedItems = cartItems.map((item) => ({
    ...item,
    price: Number(item.price),
    actualPrice: Number(item.actualPrice),
    rating: Number(item.rating),
    quantity: Number(item.quantity),
  }));

  const deliveryCharge = subtotal > 0 ? 5 : 0; // example
  const totalAmount = subtotal + deliveryCharge;

  const handleOrder = async () => {
    try {
      await placeOrders(email, sanitizedItems, Number(subtotal));
      toast.success("Order placed successfully. Check your email!");
      setEmail("");
      setOtp("");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error placing order, try again");
    }
  };

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter Email");
      return;
    }

    try {
      await sendOTP(email);
      toast.success("OTP sent to mail!");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      toast.error("Error sending mail");
    }
  };

  const handleVerifyOTP = async () => {
    if (!email || !otp) {
      toast.error("Please give input & otp");
      return;
    }

    try {
      const data = await verifyOTP(email, Number(otp));
      toast.success("OTP verified successfully!");
      setVerified(data.success);
    } catch (error) {
      console.error("Failed to verify OTP:", error);
      toast.error("Error verifying OTP");
    }
  };

  return (
    <div>
      {/* RED DIV CONTAINS INFO ABOUT ROUTE INFO FROM HOME TO CURRENT ROUTE */}

      <div className="bg-[#F53E32] py-4 flex justify-between  text-white">
        {/* To make first char UpperCase */}
        <h2 className="ml-40">{currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}</h2>

        <div className="mr-36">
          <p>Home - {currentRoute}</p>
        </div>
      </div>

      <div className="px-36 py-10">
        {/* ROW 1 - TWO COLUMNS */}
        <div className=" flex space-x-5  mb-10">
          {/* COLUMN 1 - SUBTOTAL + DELIVERY + PAYMENT */}
          <div className=" space-y-5">
            {/* SUBTOTAL BOX */}
            <div className="bg-white w-80  p-6 rounded-sm  border border-[#E9E9E9]">
              <h3 className="text-[16px] -mt-4 font-semibold text-[#000000]">
                Summary
              </h3>
              <div className="flex mt-2.5 justify-between text-sm text-[#7A7A7A]">
                <span>Sub-Total</span>
                <span className="font-semibold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-[#7A7A7A]">
                <span>Delivery Charges</span>
                <span className="font-semibold text-black">
                  {" "}
                  ${deliveryCharge.toFixed(2)}
                </span>
              </div>
              <hr className="my-2 text-[#E9E9E9]" />
              <div className="flex justify-between mt-1 text-[14px] font-semibold">
                <span className="text-[#2B2B2D]">Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              {/* CART ITEMS */}

              <ul className="mt-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex space-y-3 space-x-8">
                    <div>
                      <img src={item.image} className="w-20" />
                    </div>

                    <div className="flex-col space-y-3.5">
                      <h3 className="text-[14px] font-normal">{item.name}</h3>

                      {/* ⭐ Rating Stars */}
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-2.5 h-2.5 mr-1"
                            fill={star <= item.rating ? "#F4A263" : "white"} // filled or empty
                            stroke="#F4A263" // orange outline
                            strokeWidth="1.5"
                          >
                            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.173L12 18.896l-7.336 3.87 1.402-8.173L.132 9.211l8.2-1.193z" />
                          </svg>
                        ))}
                      </div>

                      {/* Price */}
                      <p className="font-poppins text-[14px] font-semibold text-[#64B496]">
                        ${(item.price * item.quantity).toFixed(2)}
                        <span className="ml-2 line-through text-[#7A7A7A] font-normal text-[12px]">
                          ${item.actualPrice}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* DELIVERY METHOD */}
            <div className="bg-white w-80 p-4 rounded-sm border border-[#E9E9E9] space-y-4">
              <h3 className="font-semibold text-[15px]">Delivery Method</h3>

              <p className="text-[#7A7A7A] font-normal text-[12px]">
                Please select the preferred shipping method for this order.
              </p>

              {/* OPTIONS */}
              <div className="flex -mt-2 gap-14">
                {/* OPTION 1 – FREE SHIPPING */}
                <label className="flex-col items-center justify-between cursor-pointer">
                  <span className="text-[12px] font-normal text-[#2B2B2D]">
                    Free Shipping
                  </span>

                  <div className="relative flex gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="free"
                      className="peer absolute w-full h-full opacity-0 cursor-pointer"
                    />

                    {/* Outer Circle */}
                    <div className="w-4 h-4 rounded-full border border-[#DDDDDD] peer-checked:border-[#F53E32]"></div>

                    {/* Inner Dot */}
                    <div
                      className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full
          -translate-x-1/2 -translate-y-1/2 
          scale-0 peer-checked:scale-100 transition-all"
                    ></div>

                    <p className="text-[11px] text-[#7A7A7A]">Rate - $0 .00</p>
                  </div>
                </label>

                {/* OPTION 2 – FLAT RATE */}
                <label className="flex-col items-center justify-between cursor-pointer">
                  <span className="text-[12px] font-normal text-[#2B2B2D]">
                    Flat Rate
                  </span>

                  <div className="relative flex gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="free"
                      className="peer absolute w-full h-full opacity-0 cursor-pointer"
                    />

                    {/* Outer Circle */}
                    <div className="w-4 h-4 rounded-full border border-[#DDDDDD] peer-checked:border-[#F53E32]"></div>

                    {/* Inner Dot */}
                    <div
                      className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full
          -translate-x-1/2 -translate-y-1/2 
          scale-0 peer-checked:scale-100 transition-all"
                    ></div>

                    <p className="text-[11px] text-[#7A7A7A]">Rate - $5.00</p>
                  </div>
                </label>
              </div>
            </div>

            {/* PAYMENT METHOD */}

            <div className="bg-white w-80 p-4 rounded-sm border border-[#E9E9E9] space-y-4">
              <h3 className="font-semibold text-[15px]">Payment Method</h3>

              <p className="text-[#7A7A7A] font-normal text-[12px]">
                Please select the preferred payment method to use on this order.
              </p>

              {/* OPTIONS */}
              <div className="flex flex-col space-y-4 -mt-2">
                {/* OPTION 1 – Cash On Delivery */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="cod"
                      className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                    />

                    {/* Outer Circle */}
                    <div className="w-4 h-4 rounded-full border border-[#DDDDDD] peer-checked:border-[#F53E32]"></div>

                    {/* Inner Dot */}
                    <div
                      className="absolute top-1/2 left-2 w-2 h-2 bg-[#F53E32] rounded-full
        -translate-x-1/2 -translate-y-1/2 
        scale-0 peer-checked:scale-100 transition-all"
                    ></div>

                    <p className="text-[11px] text-[#7A7A7A]">
                      Cash On Delivery
                    </p>
                  </div>
                </label>

                {/* OPTION 2 – UPI */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="upi"
                      className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                    />

                    {/* Outer Circle */}
                    <div className="w-4 h-4 rounded-full border border-[#DDDDDD] peer-checked:border-[#F53E32]"></div>

                    {/* Inner Dot */}
                    <div
                      className="absolute top-1/2 left-2 w-2 h-2 bg-[#F53E32] rounded-full
        -translate-x-1/2 -translate-y-1/2 
        scale-0 peer-checked:scale-100 transition-all"
                    ></div>

                    <p className="text-[11px] text-[#7A7A7A]">UPI</p>
                  </div>
                </label>

                {/* OPTION 3 – Bank Transfer */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="bank"
                      className="peer absolute w-4 h-4 opacity-0 cursor-pointer"
                    />

                    {/* Outer Circle */}
                    <div className="w-4 h-4 rounded-full border border-[#DDDDDD] peer-checked:border-[#F53E32]"></div>

                    {/* Inner Dot */}
                    <div
                      className="absolute top-1/2 left-2 w-2 h-2 bg-[#F53E32] rounded-full
        -translate-x-1/2 -translate-y-1/2 
        scale-0 peer-checked:scale-100 transition-all"
                    ></div>

                    <p className="text-[11px] text-[#7A7A7A]">Bank Transfer</p>
                  </div>
                </label>
              </div>
            </div>

            {/* CARD PAYMENT METHOD */}
            <div className="bg-white w-80 p-4 rounded-sm border border-[#E9E9E9] space-y-4">
              <h3 className="font-semibold text-[15px]">Payment Method</h3>
              <img src="/checkout/card-payment.png" />
            </div>
          </div>

          {/* COLUMN 2 - CUSTOMER DETAILS & BILLING DETAILS */}
          <div className="space-y-4 ">
            {/* CUSTOMER DETAILS */}
            <div className="border text-[#2B2B2D] w-[730px] font-semibold border-[#E9E9E9] h-[370px] space-y-3.5 p-4 mr-20">
              <h3>Customer</h3>
              <p className="text-[10px] font-normal">Checkout Options</p>

              <h3>Returning Customer</h3>

              {/* EMAIL & OTP */}
              <div className="mt-3 space-y-3">
                {/* EMAIL FIELD */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-medium text-[#4A4A4A]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleSendOtp} // 🔥 Trigger OTP API when user leaves input
                    className="mt-1 border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none"
                  />
                </div>

                {/* OTP FIELD WITH BUTTON */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium text-[#4A4A4A]">
                    OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter your OTP"
                    className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] w-full outline-none"
                  />
                </div>

                {/* VERIFY BUTTON */}
                <div className="flex justify-center mt-5">
                  <button
                    className="bg-[#F53E32] cursor-pointer text-white text-[10px] font-bold text-center px-6 py-2 rounded-sm hover:bg-red-600"
                    onClick={handleVerifyOTP}
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>

            {/* BILLING DETAILS */}
            <div className="border  text-[#2B2B2D] w-[730px] font-semibold border-[#E9E9E9] h-[422px] space-y-3.5 p-4">
              <h3>Billing Details</h3>
              <p className="text-[10px] font-normal">Checkout Options</p>

              <h3>Returning Customer</h3>

              {/* NAME & ADDRESS */}
              <div className="mt-3 space-y-3">
                {/* FIRST & SECOND NAME FIELD */}
                <div className="flex gap-3">
                  {/* First Name */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none"
                    />
                  </div>
                </div>

                {/* ADDRESS FIELD WITH BUTTON */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium text-[#4A4A4A]">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] w-full outline-none"
                  />
                </div>

                {/* CITY & POST CODE */}
                <div className="flex gap-3">
                  {/* CITY */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      City <span>*</span>
                    </label>

                    <div className="relative mt-1">
                      <input
                        type="text"
                        placeholder="City"
                        className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none w-full"
                      />

                      {/* Down Arrow */}
                      <span className="absolute right-2 top-1/2 font-bold -translate-y-1/2 text-[#7A7A7A]">
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      Post Code
                    </label>
                    <input
                      type="text"
                      placeholder="Post Code"
                      className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none"
                    />
                  </div>
                </div>

                {/* COUNTRY & REGIONAL STATE */}
                <div className="flex gap-3">
                  {/* COUNTRY */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      Country <span>*</span>
                    </label>

                    <div className="relative mt-1">
                      <input
                        type="text"
                        placeholder="Country"
                        className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none w-full"
                      />

                      {/* Down Arrow */}
                      <span className="absolute right-2 top-1/2 font-bold -translate-y-1/2 text-[#7A7A7A]">
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col w-1/2">
                    <label className="text-[11px] font-medium text-[#4A4A4A]">
                      Region State
                    </label>
                    <input
                      type="text"
                      placeholder="Region/State"
                      className="border border-[#E9E9E9] rounded-sm p-2 text-[12px] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex mr-20 justify-end mt-2">
              <button
                type="submit"
                onClick={handleOrder}
                disabled={!isVerified}
                className={`
    text-white text-[9px] cursor-pointer font-bold text-center px-5 py-2 rounded-sm
    ${
      isVerified
        ? "bg-[#F53E32] hover:bg-red-600"
        : "bg-gray-400 cursor-not-allowed"
    }
  `}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
