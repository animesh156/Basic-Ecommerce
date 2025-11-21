import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // for development
  withCredentials: true,
});


export const fetchProducts = async () => {
    const res = await API.get("/products");
    return res.data;
}

export default API;
