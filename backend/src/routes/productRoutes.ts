import { Router } from "express";
import { getProducts } from "../controllers/product.controller";

const router = Router();

// GET /API/products
router.get("/", getProducts);

export default router;
