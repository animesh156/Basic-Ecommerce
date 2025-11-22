import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // for development
  withCredentials: true,
});

// FETCH PRODUCTS
export const fetchProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

// PLACE ORDER
export const placeOrders = async (
  email: string,
  items: unknown[],
  amount: number
) => {
  const res = await API.post("/order/place-order", {
    email,
    items,
    amount,
  });
  return res.data;
};

// SEND OTP
export const sendOTP = async (email: string) => {
  const res = await API.post("/otp/send-otp", {
    email,
  });
  return res.data;
};

// VERIFY OTP
export const verifyOTP = async (email: string, otp: number) => {
  const res = await API.post("/otp/verify", {
    email,
    otp,
  });

  return res.data;
};

export default API;
