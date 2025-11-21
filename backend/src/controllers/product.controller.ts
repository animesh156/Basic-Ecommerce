import { Request, Response } from "express";
import { pool } from "../config/db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");

    return res.json({
      success: true,
      count: result.rowCount,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
