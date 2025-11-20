import { Response, Request } from "express";
import { pool } from "../config/db";
import { sendEmail } from "../services/mail.service";

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { email, items, amount } = req.body;

    // Basic validation
    if (!email || !items || !amount) {
      return res.status(400).json({
        success: false,
        message: "Email, items and amount are required",
      });
    }

    //Insert order
    const result = await pool.query(
      "INSERT INTO orders (email, items, amount) VALUES($1, $2, $3) RETURNING *",
      [email, JSON.stringify(items), amount]
    );

    const order = result.rows[0];

    // Send Email
    try {
      await sendEmail(
        email,
        "Order Confirmation",
        `Your order was placed.\nOrder ID: ${order.id}\nAmount: ${order.amount}`
      );
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error: any) {
    console.error("Error placing order:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
